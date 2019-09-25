import hou
import os
from struct import *
node = hou.pwd()
geo = node.geometry()

FilePath = 'C:\Users\Reference\Desktop\MV\MVexport.vox'
outputString = "This is my first python string outputted to a file from houdini"

"VOX_"
"SIZE"
"MAIN"
"XYZI"

def b32(num):
   return pack("l",num)

#gather voxels.
#myVdb = hou.node('/obj/geo1/vdbfrompolygons1').geometry().prims()[0]
outputVoxels = ""
dimX=126
dimY=126
dimZ=126
myGeo =  hou.node('/obj/geo1/ptcld_mat').geometry()
for pnt in myGeo.points()
	loc = pnt.pointFloatAttribValues('P')
	mat = pnt.pointFloatAttribValues('mat')
	outputVoxels+=pack("4B",int(loc[0]),int(loc[1]),int(loc[2]),int(mat))
#for x in xrange(0,dimX):
#	for y in xrange(0,dimY):
#		for z in xrange(0,dimZ):
#			myVdbSample = myVdb.sample((x,y,z))
#			if(myVdb.sample((x,y,z))<0):
#				outputVoxels+=pack("4B",x,y,z,1)

############    
#XYZI section
bXYZI = "XYZI".encode("utf-8")
bXYZI += pack("l",len(outputVoxels)+4)#XYZI section length number of voxel entires. unknown.
bXYZI += pack("l",0)#children length
bXYZI += pack("l",len(outputVoxels)/4)#voxel count
bXYZI += outputVoxels

with open(FilePath, 'wb') as f:
	############
	#VOX section
	f.write("VOX ")
	#VOX version number < one byte.
	f.write(pack('l',150))
	#VOX section length
	##VOX children length  < header does not have a length.
	##f.write(pack('l',0))

	############    
	#MAIN section
	f.write("MAIN")
	#MAIN section length	<self length is 0 <length of XYZI + SIZE SECTION
	mainLength = len(bXYZI)+4+(4*5)
	f.write(pack('l',0))    
	#MAIN children length	
	f.write(pack('l',mainLength))  #Main length will be largest number.

	############    
	#SIZE section //5 bytes.
	f.write("SIZE")
	f.write(pack('l',12))#SIZE section length	<3*4
	f.write(pack('l',0))#SIZE children length 	<0	
	f.write(pack('l',dimX))
	f.write(pack('l',dimY))
	f.write(pack('l',dimZ))

	#write XYZI
	f.write(bXYZI)




    
