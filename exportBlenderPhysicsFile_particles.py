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
from struct import *
node = hou.pwd()
geo = node.geometry()

#FrameWithLeadingZeros = padzero(5,$F)
simPrefix = "houdiniSim"
frame =  "%05d" % ($F,)
simPostfix= "00"

directory = r'A:/sim/blendcache_MANTA2/'
name =  simPrefix+"_"+frame+"_"+simPostfix
outPath = directory+fileName

header = pack("8c",'B','P','H','Y','S','I','C','S') #blender physics file!
header += pack("I",1) #particles only!

contents = ""
for point in geo.points():
    index = point.findPointAttrib(id);
    #print index
