import Location from './location.mjs';
import Graph from './graph.mjs';

const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouse a');
const warehouseB = new Location('warehouse b');

let map = new Graph();
map.addNode('factory');
map.addNode('port');
map.addNode('warehouseA');
map.addNode('warehouseB');
map.addEdge('factory', 'port', 1);
map.addEdge('factory', 'warehouseB', 5);
map.addEdge('port', 'warehouseA', 4, 'water');

console.log(map.getRoute('warehouseA', 'warehouseB'));
// import Truck from './truck.mjs';
// import Ship from './ship.mjs';
// import Supply from './supply.mjs';
// import Map from './map.mjs';

// // GLOBALS
// let goodsDelivered = false;
// let time = 0;

// // SETUP MAP
// map.addPath(factory, port, 4, 'road');
// map.addPath(port, warehouseA, 4, 'water');
// map.addPath(factory, warehouseB, 5, 'road');


// console.log(map.getRoute(warehouseB, warehouseA));

// // SETUP TRANSPORTATION
// const truckA = new Truck(factory);
// const truckB = new Truck(factory);
// const shipA = new Ship(port);
// const vihicles = [truckA, truckB, shipA];
// factory.addVihicle([truckA, truckB]);
// port.addVihicle([shipA]);

// // SETUP SUPPLIES
// const supplies = [new Supply(warehouseA), new Supply(warehouseB), new Supply(warehouseB)];
// factory.addSupply(supplies);

// while (!goodsDelivered && time < 100) {
//     map.locations.forEach(location => {
//         if(location.vihicles.length > 0 && location.supplyLine.length > 0) {
//             // vihicle AND supply ready
//             const supply = location.getSupply();
//             const vihicle = location.getVihicle();
//             vihicle.load(supply);
//             // get route to destination
//         }
//     });
//     vihicles.forEach(vihicle => {
//         // for each vihicle
//             // move
//             // has reached destination?
//                 // drop cargo
//                 // drop vihicle at location
//             // set position vihicle and supply
//     });
//     supplies.forEach(supply => {
//         // for each cargo
//             // cargo at location?
//                 // set status (or remove from array)
//                 // check if all cargo has arrived
//     });
//     time++;
// }

// console.log('time passed: ', time)