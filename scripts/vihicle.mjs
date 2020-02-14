class Vihicle extends EventTarget {
    constructor(location, terrain) {
        super();
        this.cargo = null;
        this.location = location;
        this.terrain = terrain;
        this.destination = null;
        this.route = null;
    }

    load(cargo) {
        this.cargo = cargo;
        this.cargo.setLocation(this.location);
        this.setDestination(this.cargo.getDestination());

        // set route
    }

    unload() {
        let tempCargo = this.cargo;
        this.cargo = null;
        return tempCargo;
    }

    atDestination() {
        return this.location === this.destination;
    }

    getDestination() {
        return this.destination;
    }

    setDestination(destination) {
        this.destination = destination;
    }

    setRoute(destination) {
        
    }
}

export default Vihicle;