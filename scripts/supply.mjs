class Supply extends EventTarget {
    constructor(destination) {
        super();
        this.location = null;
        this.destination = destination;
    }

    atDestination() {
        return this.location === this.destination;
    }

    setLocation(location) {
        this.location = location;
    }

    atDestination() {
        return this.location === this.destination;
    }

    getDestination() {
        return this.destination;
    }

    setDestination(destination) {
        this.destination = destination;
    }
}

export default Supply;