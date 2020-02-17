import Location from './location.mjs';
import Graph from './graph.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Supply from './supply.mjs';

// globals
const delivering = true;
let time = 0;

// create map
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

// add vihicles
factory.addVihicle([new Truck(), new Truck()]);
port.addVihicle(new Ship());

// add supplies
factory.addSupply([new Supply(warehouseA), new Supply(warehouseA), new Supply(warehouseB)]);

while(delivering && time < 100) {
    time++;
}