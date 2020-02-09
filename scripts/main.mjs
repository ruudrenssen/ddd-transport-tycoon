import Location from './location.mjs';
import Path from './path.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Cargo from './cargo.mjs';
import Route from './route.mjs';

// Global variables
let goodsDelivered = false;
let time = 0;

// SETUP MAP
// locations
const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouse a');
const warehouseB = new Location('warehouse b');
const locations = [factory, port, warehouseA, warehouseB]

// paths
const factoryPort = new Path(factory, port, 1, 'road');
const factoryWarehouseB = new Path(factory, port, 5, 'road');
const portWarehouseA = new Path(port, warehouseA, 4, 'water');

// SETUP TRANSPORTATION
const truckA = new Truck(factory);
const truckB = new Truck(factory);
const shipA = new Ship(port);

while (!goodsDelivered && time < 15) {
    time++;
}

console.log('time passed: ', time)