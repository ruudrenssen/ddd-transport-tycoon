import Vihicle from "./vihicle.mjs";

class Ship extends Vihicle {
    constructor(location) {
        super(location, 'water');
    }
}

export default Ship;