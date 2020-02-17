class Supply {
    constructor(destination) {
		this.destination = destination;
        this.location = null;
    }

    setLocation(location) {
        this.location = location;
    }
}

export default Supply;