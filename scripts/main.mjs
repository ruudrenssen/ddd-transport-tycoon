import Location from './location.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Supply from './supply.mjs';
import Map from './map.mjs';

// GLOBALS
let goodsDelivered = false;
let time = 0;

// SETUP MAP
const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouse a');
const warehouseB = new Location('warehouse b');
const map = new Map([factory, port, warehouseA, warehouseB]);
map.createPath(factory, port, 4, 'road');
map.createPath(port, warehouseA, 4, 'water');
map.createPath(factory, warehouseB, 5, 'road');

// SETUP TRANSPORTATION
const truckA = new Truck(factory);
const truckB = new Truck(factory);
const shipA = new Ship(port);
const vihicles = [truckA, truckB, shipA];
factory.addVihicle([truckA, truckB]);
port.addVihicle([shipA]);

// SETUP SUPPLIES
const supplies = [new Supply(warehouseA), new Supply(warehouseB), new Supply(warehouseB)];
factory.addSupply(supplies);

while (!goodsDelivered && time < 100) {
    map.locations.forEach(location => {
        if(location.vihicles.length > 0 && location.supplyLine.length > 0) {
            // vihicle AND supply ready
            let supply = location.getSupply();
            if(!supply.atDestination()) {
                // load cargo onto vihicle
                let vihicle = location.getVihicle();
                vihicle.load(supply);
                const route = map.getRoute(vihicle.location, supply.destination);
            }
        }
    });
    vihicles.forEach(vihicle => {
        // for each vihicle
            // move
            // has reached destination?
                // drop cargo
                // drop vihicle at location
            // set position vihicle and supply
    });
    supplies.forEach(supply => {
        // for each cargo
            // cargo at location?
                // set status (or remove from array)
                // check if all cargo has arrived
    });
    time++;
}

console.log('time passed: ', time)