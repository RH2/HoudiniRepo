node = hou.pwd()
geo = node.geometry()

header = "export const CAMERA_DATA ={\n"
terminal = "]}"
ps = "position:["
qs = "],\nquaternion:["


for point in geo.points():
   position = point.attribValue("P")
   quaternion = point.attribValue("orient")
   
   positionString = "[{x:.3f},{y:.3f},{z:.3f}],"
   positionString = positionString.format(x=position[0], y=position[1], z=position[2])
   #print(positionString)
   
   qString = "[{x:.3f},{y:.3f},{z:.3f},{w:.3f}],"
   qString = qString.format(x=quaternion[0], y=quaternion[1], z=quaternion[2], w= quaternion[3])
   #print(qString)
   ps += positionString
   qs += qString
   
body= header+ps+qs+terminal
#print(body)

parameter = node.parm("path")
print(parameter.eval())
f = open(parameter.eval(), "w")
f.write(body)
f.close()
