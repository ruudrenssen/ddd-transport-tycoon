import Location from './location.mjs';
import Path from './path.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Cargo from './cargo.mjs';

// Global variables
let goodsDelivered = false;
let time = 0;

// SETUP MAP
// locations
const factory = new Location();
const port = new Location();
const warehouseA = new Location();
const warehouseB = new Location();
// paths
const factoryToPort = new Path(factory, port, 1, 'road');
const factoryToWarehouseB = new Path(factory, port, 5, 'road');
const portToWarehouseA = new Path(port, warehouseA, 4, 'water');

// SETUP TRANSPORTATION
const truckA = new Truck(factoryToPort.positions[0]);
const truckB = new Truck(factoryToPort.positions[0]);
const shipA = new Ship(portToWarehouseA.positions[0]);

// SETUP CARGO
const allCargo = [
    new Cargo(factory, warehouseA),
    new Cargo(factory, warehouseB),
    new Cargo(factory, warehouseB)
]
// distribute cargo
allCargo.forEach(cargo => {
    cargo.position.load(cargo);
});

// while (!goodsDelivered && time < 1000) {
//     time++;
// }