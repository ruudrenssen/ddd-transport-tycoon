import Vihicle from "./vihicle.mjs";

class Ship extends Vihicle {
    constructor(position) {
        super(position, 'water');
    }
}

export default Ship;