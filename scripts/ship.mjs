import Vihicle from "./vihicle.mjs";

class Ship extends Vihicle {
    constructor(location, paths) {
        super(location, paths, 'water');
    }
}

export default Ship;