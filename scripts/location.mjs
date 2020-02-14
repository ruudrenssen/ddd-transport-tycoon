class Location extends EventTarget {
    constructor(name) {
        super();
        this.name = name;
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
                this.supplyLine.push(supply);
            })
        } else {
            this.supplyLine.push(supplies);
        }
    }

    getSupply() {
        return this.supplyLine.shift();
    }
}

export default Location;