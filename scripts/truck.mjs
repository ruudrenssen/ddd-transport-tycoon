import Vihicle from "./vihicle.mjs";

class Truck extends Vihicle {
    constructor(map) {
        super(map, 'road');
    }
}

export default Truck;