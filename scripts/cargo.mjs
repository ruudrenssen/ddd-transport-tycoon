class Cargo extends EventTarget {
    constructor(destination) {
        super();
        this.destination = destination;

        // Events: cargoArrived
    }
}

export default Cargo;