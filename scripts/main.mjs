import Location from './location.mjs';
import Graph from './graph.mjs';

const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouse a');
const warehouseB = new Location('warehouse b');

let map = new Graph();
map.addNode(factory);
map.addNode(port);
map.addNode(warehouseA);
map.addNode(warehouseB);
map.addEdge(factory, port, 1);
map.addEdge(factory, warehouseB, 5);
map.addEdge(port, warehouseA, 4);

console.log(map.getRoute(warehouseA, warehouseB));