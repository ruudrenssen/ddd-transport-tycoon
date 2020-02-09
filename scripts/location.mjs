class Location extends EventTarget {
    constructor(name) {
        super();
        this.name = name;
        this.supplyLine = [];
        this.vihicles = [];

        // Events: vihicleArrived
    }

    addVihicle(vihicle) {
        this.vihicles.push(vihicle);
    }
}

export default Location;