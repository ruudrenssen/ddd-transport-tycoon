class Vihicle {
    constructor(location, terrain) {
        this.cargo = null;
        this.location = location;
        this.terrain = terrain;
        this.destination = null;
        this.route = null;
        this.position = null;
    }

    load(cargo) {
        this.cargo = cargo;
        this.cargo.setLocation(this.location);
        this.setDestination(this.cargo.getDestination());
    }

    unload() {
        let tempCargo = this.cargo;
        this.cargo = null;
        return tempCargo;
    }

    hasArrived() {
        return this.location === this.destination;
    }

    getDestination() {
        return this.destination;
    }

    setDestination(destination) {
        this.destination = destination;
    }
}

export default Vihicle;