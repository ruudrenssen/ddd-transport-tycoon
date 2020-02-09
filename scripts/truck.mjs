import Vihicle from "./vihicle.mjs";

class Truck extends Vihicle {
    constructor(position) {
        super(position, 'road');
    }
}

export default Truck;