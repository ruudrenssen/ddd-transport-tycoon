class Vihicle extends EventTarget {
    constructor(location, terrain) {
        super();
        this.cargo = null;
        this.location = location;
        this.terrain = terrain;
        this.desination = null;
    }

    move() {
        if(this.location == this.desination) {
            this.dispatchEvent(new Event('desinationReached'));
        }
    }
}

export default Vihicle;