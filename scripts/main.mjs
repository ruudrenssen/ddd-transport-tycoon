import Location from './location.mjs';
import Graph from './graph.mjs';

const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouseA');
const warehouseB = new Location('warehouseB');

let map = new Graph();
map.addNode(factory);
map.addNode(port);
map.addNode(warehouseA);
map.addNode(warehouseB);
map.addEdge(factory, port, 1, 'road');
map.addEdge(factory, warehouseB, 5, 'road');
map.addEdge(port, warehouseA, 4, 'water');

console.log('route:', map.getRoute(warehouseA, warehouseB));