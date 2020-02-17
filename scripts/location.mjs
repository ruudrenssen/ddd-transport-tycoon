class Location {
    constructor(id) {
        this.id = id;
        this.supplyLine = [];
        this.vihicles = [];
    }

    getVihicle() {
        return this.vihicles.shift();
    }

    addVihicle(vihicles) {
        if(Array.isArray(vihicles)) {
            vihicles.forEach(vihicle => {
                this.vihicles.push(vihicle);
            })
        } else {
            this.vihicles.push(vihicles);
        }
    }

    addSupply(supplies) {
        if(Array.isArray(supplies)) {
            supplies.forEach(supply => {
                if(supply.destination != this) {
                    this.supplyLine.push(supply);
                }
            })
        } else {
            if(supplies.destination != this) {
                this.supplyLine.push(supplies);
            }
        }
    }

    getSupply() {
        return this.supplyLine.shift();
    }
}

export default Location;