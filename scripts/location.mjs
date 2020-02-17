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
                vihicle.setLocation(this);
                this.vihicles.push(vihicle);
            })
        } else {
            vihicles.setLocation(this);
            this.vihicles.push(vihicles);
        }
    }

    addSupply(supplies) {
        if(Array.isArray(supplies)) {
            supplies.forEach(supply => {
                if(supply.destination != this) {
                    supply.setLocation = this;
                    this.supplyLine.push(supply);
                }
            })
        } else {
            if(supplies.destination != this) {
                supplies.setLocation = this;
                this.supplyLine.push(supplies);
            }
        }
    }

    getSupply() {
        return this.supplyLine.shift();
    }
}

export default Location;