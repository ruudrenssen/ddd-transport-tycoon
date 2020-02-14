import Route from './route.mjs';

class Vihicle extends EventTarget {
    constructor(location, paths, terrain) {
        super();
        this.cargo = null;
        this.location = location;
        this.terrain = terrain;
        this.destination = null;
        this.routes = paths;
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

    atDestination() {
        return this.location === this.destination;
    }

    getDestination() {
        return this.destination;
    }

    setDestination(destination) {
        this.destination = destination;
        this.routes.forEach(route => {
            route.positions.forEach(position => {
                console.log(position);
            })         
        });
    }
}

export default Vihicle;