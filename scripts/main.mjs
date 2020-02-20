import World from "./world.mjs";
import TransportMap from './transport-map.mjs';
import Location from './location.mjs';
import Truck from './truck.mjs';
import Ship from './ship.mjs';
import Good from './good.mjs';

// Configure map
const factory = new Location('factory');
const port = new Location('port');
const warehouseA = new Location('warehouseA');
const warehouseB = new Location('warehouseB');

const map = new TransportMap();
map.addLocation(factory);
map.addLocation(port);
map.addLocation(warehouseA);
map.addLocation(warehouseB);
map.addPath(factory, port, 1, 'road');
map.addPath(factory, warehouseB, 5, 'road');
map.addPath(port, warehouseA, 4, 'water');

const truckA = new Truck('Truck A');
const truckB = new Truck('Truck B');
const shipA = new Ship('Ship A');

const locations = [factory, port, warehouseA, warehouseB]
const vehicles = [truckA, truckB, shipA];
const goods = [new Good(warehouseA), new Good(warehouseA), new Good(warehouseB)];

new World(map, {'locations': locations, 'vehicles': vehicles, 'goods': goods});

factory.addGoods(goods);
factory.addVehicles([truckA, truckB]);
port.addVehicles([shipA]);
