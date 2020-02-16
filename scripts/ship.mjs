import Vihicle from "./vihicle.mjs";

class Ship extends Vihicle {
    constructor(location, paths) {
        super(location, 'water');
    }
}

export default Ship;