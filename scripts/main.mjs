import Location from './location.mjs';
import Map from './map.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Supply from './supply.mjs';

// globals
const goodsDelivered = false;
let time = 0;

// CONFIGURATIONS
// locations
const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouseA');
const warehouseB = new Location('warehouseB');
const locations = [factory, port, warehouseA, warehouseB];

let map = new Map();
map.addLocation(factory);
map.addLocation(port);
map.addLocation(warehouseA);
map.addLocation(warehouseB);
map.addPath(factory, port, 1, 'road');
map.addPath(factory, warehouseB, 5, 'road');
map.addPath(port, warehouseA, 4, 'water');

const supplies = [new Supply(warehouseA), new Supply(warehouseA), new Supply(warehouseB)];
factory.addSupplies(supplies);

const truckA = new Truck(map);
const truckB = new Truck(map);
const shipA = new Ship(map);
const vihicles = [truckA, truckB, shipA];

factory.addVihicles([truckA, truckB]);
port.addVihicles([shipA]);

while(!goodsDelivered && time < 100) {
    time++;
    locations.forEach(location => {
        location.update();
    });
    vihicles.forEach(vihicle => {
        vihicle.update();
    });
    supplies.forEach(supply => {
        supply.update();
    })
}