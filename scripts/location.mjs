class Location {
    constructor() {
        this.supplyLine = [];
    }

    load(cargo) {
        this.supplyLine.push(cargo);
    }

    offload() {
        return this.supplyLine.shift();
    }

    update() {
        
    }
}

export default Location;