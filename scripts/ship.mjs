import Vehicle from "./vehicle.mjs";

class Ship extends Vehicle {
    constructor(name) {
        super(name, 'water');
    }
}

export default Ship;