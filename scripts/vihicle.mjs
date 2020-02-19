class Vihicle extends EventTarget {
    constructor(map, terrain) {
        super();
        this.map = map;
        this.terrain = terrain;
        this.cargo = null;
        this.location = null;
        this.path = null;
    }

    update() {
        if(this.cargo) {
            console.log(this.path)
        } else {
            // on location where goods are stored?
        }
    }

    setLocation(location) {
        this.location = location;
        this.dispatchEvent(new Event('vihicle-arrived'));
    }

    load(cargo) {
        this.cargo = cargo;
        this.path = this.map.getRoute(this.location, this.map.getRoute(this.location, this.cargo.destination)[1]);
        this.dispatchEvent(new Event('cargo-loaded'));
    }

    unload() {
        let tempCargo = this.cargo;
        this.cargo = null;
        this.dispatchEvent(new Event('cargo-unloaded'));
        return tempCargo;
    }
}

export default Vihicle;