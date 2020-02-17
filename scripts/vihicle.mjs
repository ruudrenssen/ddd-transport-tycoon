class Vihicle {
    constructor(terrain) {
        this.terrain = terrain;
        this.location = null;
        this.cargo = null;
        this.destination = null;
        this.route = null;
        this.position = null;
    }

    setLocation(location) {
        this.location = location;
    }

    setPath(path) {
    }

    load(cargo) {
        this.cargo = cargo;
    }

    unload() {
        let tempCargo = this.cargo;
        this.cargo = null;
        return tempCargo;
    }
}

export default Vihicle;