includeflags = [
1, #id
1, #location
1, #velocity
1, #rotation
1, #rotational velocity
1, #size
1, #times
1] #boids



import hou
import os
import numpy
from struct import *
node = hou.pwd()
geo = node.geometry()

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
    data = var.attribValue(id_attrib)
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
    f.write( pack("3f",data[0],data[1],data[2]))
def writeTime(f,var):
    bith = var.attribValue(age_attrib)
    lifetime = var.attribValue(age_attrib)
    death = var.attribValue(age_attrib)
    f.write( pack("3f",birth,lifetime,death))
def writeBoid(f,var):
    data = hou.Vector4( (0.0,0.0,0.0,0.0) ) #todo
    f.write( pack("4f",data[0],data[1],data[2],data[3]))
exportLib = [writeID,writePos,writeVel,writeAngle,writeAngleVel,writeScale,writeTime,writeBoid]

#FrameWithLeadingZeros = padzero(5,$F)
simPrefix = "houdiniSim"
frame =  "%05d" % ($F,)
simPostfix= "00"

directory = r'A:/sim/blendcache_MANTA2/'
name =  simPrefix+"_"+frame+"_"+simPostfix
outPath = directory+name

print outPath
with open(outPath, 'wb') as f:

header = pack("8c",'B','P','H','Y','S','I','C','S') #blender physics file!
header += pack("H",1) #particles only!
header += pack("H",0) #special flag!

f.write(header)

contents = ""
id_attrib = geo.findPointAttrib("id");
P_attrib = geo.findPointAttrib("P");
v_attrib = geo.findPointAttrib("v");
n_attrib = geo.findPointAttrib("N");
rotV_attrib = 0
size_attrib = geo.findPointAttrib("pscale");
age_attrib = geo.findPointAttrib("age");
boid_attrib = 0


for point in geo.points():
    for i in range(8):
        exportLib[i](f,point)



    #I = point.attribValue(id_attrib)
    #P = point.attribValue(P_attrib) #position
    #V = point.attribValue(v_attrib) #velocity
    #A = makequat( hou.Vector3( point.attribValue(n_attrib) ) )
    #AV= angularVelocity = hou.Vector3( (0.0,0.0,0.0) ) #empty for now
    #S = point.attribValue(id_attrib)
    #T = point.attribValue(age_attrib)
    #B = (0.0, 0.0, 0.0, 0.0, 0.0) #five empty attributes.


    #f.write( pack("I",I+1))                     #I
    #f.write( pack("3f",P[0],P[1],P[2]))         #P
    #f.write( pack("3f",V[0],V[1],V[2]))         #V
    #f.write( pack("4f",A[0],A[1],A[2],A[3]))    #Angle
    #f.write( pack("3f",0,0,0))                  #AngleVelocity
    #f.write( pack("f",S) )                      #S
    #f.write( pack("3f", 0.0, 5.0, T))           #T  (start,end,lifetime?)

    #f.write( pack("f",0))                       #BOID
    #f.write( pack("f",0))
    #f.write( pack("f",0))
    #f.write( pack("f",0))
    #f.write( pack("f",0))
