import Vihicle from "./vihicle.mjs";

class Ship extends Vihicle {
    constructor(map) {
        super(map, 'water');
    }
}

export default Ship;