class Vihicle {
    constructor(position, terrain) {
        this.cargo = null;
        this.position = position;
        this.terrain = terrain;
    }

    load(cargo) {
        this.cargo = cargo;
    }

    offload(cargo) {
        const load = this.cargo;
        this.cargo = null;
        return load;
    }

    update() {
        
    }
}

export default Vihicle;