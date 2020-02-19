class Location extends EventTarget {
    constructor(id) {
        super();
        this.id = id;
        this.supplyLine = [];
        this.vihicles = [];
    }

    update() {
        // update each location per time unit:
        if(this.supplyLine.length > 0 && this.vihicles.length > 0) {
            // vihicles AND supplies ready:
            // load cargo onto vihicle
            const vihicle = this.getVihicle();
            const cargo = this.getSupply();
            vihicle.load(cargo);
        }
    }

    getVihicle() {
        return this.vihicles.shift();
    }

    addVihicles(vihicles) {
        if(Array.isArray(vihicles)) {
            vihicles.forEach(vihicle => {
                this.addVihicle(vihicle);
            });
        } else {
            this.addVihicle(vihicle);
        }
    }

    addVihicle(vihicle) {
        vihicle.addEventListener('vihicle-arrived', this.onArrival.bind(this));
        vihicle.addEventListener('cargo-loaded', this.onCargoLoaded.bind(this));
        vihicle.addEventListener('cargo-unloaded', this.onCargoUnloaded.bind(this));
        vihicle.setLocation(this);
        this.vihicles.push(vihicle);
    }

    addSupplies(supplies) {
        if(Array.isArray(supplies)) {
            supplies.forEach(supply => {
                this.addSupply(supply);
            });
        } else {
            this.addSupply(supplies);
        }
    }

    addSupply(supply) {
        this.supplyLine.push(supply);
    }

    getSupply() {
        return this.supplyLine.shift();
    }

    onArrival(event) {
        const vihicle = event.target;
        if(vihicle.cargo) {
            // has cargo, unload it
        } else {
            // has no cargo, load it
            const cargo = this.getSupply();
            if(cargo) {
                vihicle.load(cargo);
            }
        }
    }

    onCargoLoaded(event) {
        console.log(event.type);
    }

    onCargoUnloaded(event) {
        console.log(event.type);
    }
}

export default Location;