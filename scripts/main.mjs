import Location from './location.mjs';
import Path from './path.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Supply from './supply.mjs';

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
const pathFactoryPort = new Path(factory, port, 1, 'road');
const pathFactoryWarehouseB = new Path(factory, port, 5, 'road');
const pathPortWarehouseA = new Path(port, warehouseA, 4, 'water');
const roads = [pathFactoryPort, pathFactoryWarehouseB];
const waterWays = [pathPortWarehouseA];

// SETUP TRANSPORTATION
const truckA = new Truck(factory, roads);
const truckB = new Truck(factory, roads);
const shipA = new Ship(port, waterWays);
const vihicles = [truckA, truckB, shipA];

factory.addVihicle([truckA, truckB]);
port.addVihicle([shipA]);

// SETUP SUPPLIES
const supplies = [new Supply(warehouseA), new Supply(warehouseB), new Supply(warehouseB)];
factory.addSupply(supplies);

while (!goodsDelivered && time < 100) {
    locations.forEach(location => {
        if(location.vihicles.length > 0 && location.supplyLine.length > 0) {
            // vihicle AND supply ready
            let supply = location.getSupply();
            if(!supply.atDestination()) {
                // load cargo onto vihicle
                let vihicle = location.getVihicle();
                vihicle.load(supply);
            }
        }
    });
    // for each vihicle
        // has reached destination?
            // drop cargo
            // drop vihicle at location
        // set position vihicle and supply
    // for each cargo
        // cargo at location?
            // set status (or remove from array)
            // check if all cargo has arrived
    time++;
}

console.log('time passed: ', time)