import hou
import os
import numpy
from struct import *
node = hou.pwd()
geo = node.geometry()


b_id =  1   #id
b_loc=  1   #location
b_vel=  1   #velocity
b_rot=  0   #rotation
b_rotv= 0   #rotational velocity
b_s=    1   #size
b_t=    1   #times
b_b=    0   #boids

framespersecond = 25

flagArray = [b_id,b_loc,b_vel,b_rot,b_rotv,b_s,b_t,b_b]

def outMaskGen(input):
    number = 0
    for i in range(len(input)):
        number+=(1<<i)*input[i]
    return(number)

def makequat(vector):
    #Quaternion q;
    #vector a = crossproduct(v1, v2);
    #q.xyz = a;
    #q.w = sqrt((v1.Length ^ 2) * (v2.Length ^ 2)) + dotproduct(v1, v2);
    q = hou.Vector4()
    defaultVector = hou.Vector3( (1.0,0.0,0.0) )
    crossVector = vector.cross(defaultVector)
    norm = crossVector.normalized()
    w = (((vector.length()**2)*(defaultVector.length()**2))**.5)+vector.dot(defaultVector)
    result = hou.Vector4( (norm) )
    result[3] = w
    #print "result: ",result
    return result


def writeID(f,var):
    data = var.attribValue(id_attrib)
    f.write( pack("I",data))

def writePos(f,var):
    data = var.attribValue(P_attrib)
    f.write( pack("3f",data[0],data[1],data[2]))

def writeVel(f,var):
    data = var.attribValue(v_attrib)
    f.write( pack("3f",data[0],data[1],data[2]))

def writeAngle(f,var):
    data = makequat( hou.Vector3( var.attribValue(n_attrib) ) )
    f.write( pack("4f",data[0],data[1],data[2],data[3]))

def writeAngleVel(f,var):
    data = hou.Vector3( (0.0,0.0,0.0) ) #todo
    f.write( pack("3f",data[0],data[1],data[2]))

def writeScale(f,var):
    data = var.attribValue(size_attrib)
    f.write( pack("f",data))

def writeTime(f,var):
    now = $F/framespersecond
    age = var.attribValue(age_attrib)
    lifetime = var.attribValue(life_attrib)
    birth = now-age
    death = (lifetime-age)
    f.write( pack("3f",birth,lifetime,death))

def writeBoid(f,var):
    data = hou.Vector4( (0.0,0.0,0.0,0.0) ) #todo
    f.write( pack("4f",data[0],data[1],data[2],data[3]))

packFunctions = [writeID,writePos,writeVel,writeAngle,writeAngleVel,writeScale,writeTime,writeBoid]

#FrameWithLeadingZeros = padzero(5,$F)
simPrefix = "houdiniSim"
frame =  "%05d" % ($F,)
simPostfix= "00"
extension = ".bphys"

directory = r'A:/sim/blendcache_MANTA2/'
name =  simPrefix+"_"+frame+"_"+simPostfix
outPath = directory+name+extension


header = pack("8c",'B','P','H','Y','S','I','C','S') #blender physics file!
header += pack("H",1) #particles only!
header += pack("H",0) #special flag!
header += pack("I", len(geo.points()) )#total number of points on the frame
header += pack("I",outMaskGen(flagArray)) #flag array to unsigned int.

print outPath
with open(outPath, 'wb') as f:
    f.write(header)
    contents = ""

    ####################    point Attribs!
    id_attrib = geo.findPointAttrib("id");
    P_attrib = geo.findPointAttrib("P");
    v_attrib = geo.findPointAttrib("v");
    n_attrib = geo.findPointAttrib("N");
    rotV_attrib = 0.0
    size_attrib = geo.findPointAttrib("pscale");
    age_attrib = geo.findPointAttrib("age");
    life_attrib = geo.findPointAttrib("life");

    boid_attrib = 0.0

    for point in geo.points():
        for i in range(len(flagArray)):
            if(flagArray[i]==1):
                packFunctions[i](f,point)
