#'BPHYSICS'+
#0 softbody
#1 particles
#2 cloth
#3 smoke_domain
#4 smoke_highres
#5 dynamicpaint
#6 rigidbody

#index , 4          (4)
#location , 12      (4,4,4)
#velocity , 12      (4,4,4)
#rotation , 16      (4,4,4,4)
#avelocity , 12     (4,4,4)
#size , 4           (4)
#times , 12         (4,4,4)
#boids , 20         (4,4,4,4,4) LOTS OF EMPTY SPACE!

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



#FrameWithLeadingZeros = padzero(5,$F)
simPrefix = "houdiniSim"
frame =  "%05d" % ($F,)
simPostfix= "00"

directory = r'A:/sim/blendcache_MANTA2/'
name =  simPrefix+"_"+frame+"_"+simPostfix
outPath = directory+name

print outPath

header = pack("8c",'B','P','H','Y','S','I','C','S') #blender physics file!
header += pack("I",1) #particles only!

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
    #index , 4          (4)
    #location , 12      (4,4,4)
    #velocity , 12      (4,4,4)
    #rotation , 16      (4,4,4,4)
    #avelocity , 12     (4,4,4)
    #size , 4           (4)
    #times , 12         (4,4,4)
    #boids , 20         (4,4,4,4,4) LOTS OF EMPTY SPACE!
    I = point.attribValue(id_attrib)
    P = point.attribValue(P_attrib) #position
    V = point.attribValue(v_attrib) #velocity
    #A = makequat( hou.Vector3( (0.5,0.2,0.1) ) )
    A = makequat( hou.Vector3( point.attribValue(n_attrib) ) )
    AV= angularVelocity = hou.Vector3( (0.0,0.0,0.0) ) #empty for now
    S = point.attribValue(id_attrib)
    T = point.attribValue(age_attrib)
    B = (0.0, 0.0, 0.0, 0.0, 0.0) #five empty attributes.

    #print I,P,V,A,AV,S,T,B

    #pos2 = hou.vector3(P)
    #print pos2

    #contents += pack("I",I)
    #contents += pack("f",P.x)
    #contents += pack("f",P.y)
    #contents += pack("f",P.z)

    #print contents
