import Vihicle from "./vihicle.mjs";

class Truck extends Vihicle {
    constructor(location, paths) {
        super(location, 'road');
    }
}

export default Truck;