import Vihicle from "./vihicle.mjs";

class Truck extends Vihicle {
    constructor(location) {
        super(location, 'road');
    }
}

export default Truck;