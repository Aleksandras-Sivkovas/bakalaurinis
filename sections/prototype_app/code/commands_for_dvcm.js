// Nodes
pp = editorModel.diagram.root.processesPool
fp = editorModel.diagram.root.functionsPool;
start = new dvcm.StartEvent()
start.position.y = 20
start.position.x = 100
pp.append(start)
p1 = new dvcm.Activity("P1")
p1.position.y = 160
p1.position.x = 85
pp.append(p1);
f1 = new dvcm.Activity("F1")
f1.position.y = 160
f1.position.x = 85
fp.append(f1)
end = new dvcm.EndEvent()
end.position.y = 340
end.position.x = 100
pp.append(end)
tr = new dvcm.Transaction("MT1")
editorModel.diagram.addComponent(tr)


// Edges
sf = new dvcm.SequenceFlow()
sf.source = start
sf.target = p1
editorModel.diagram.addEdge(sf)

sf = new dvcm.SequenceFlow()
sf.source = p1
sf.target = f1
editorModel.diagram.addEdge(sf)

sf = new dvcm.SequenceFlow()
sf.source = f1
sf.target = p1
editorModel.diagram.addEdge(sf)

sf = new dvcm.SequenceFlow()
sf.source = p1
sf.target = end
editorModel.diagram.addEdge(sf)

sf = new dvcm.InTransaction()
sf.source = tr
sf.target = p1
editorModel.diagram.addEdge(sf)

sf = new dvcm.InTransaction()
sf.source = tr
sf.target = f1
editorModel.diagram.addEdge(sf)
