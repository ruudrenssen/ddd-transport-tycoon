import Vehicle from "./vehicle.mjs";

class Truck extends Vehicle {
    constructor(name) {
        super(name, 'road');
    }
}

export default Truck;