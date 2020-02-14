import Vihicle from "./vihicle.mjs";

class Truck extends Vihicle {
    constructor(location, paths) {
        super(location, paths, 'road');
    }
}

export default Truck;