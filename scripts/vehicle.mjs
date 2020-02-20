class Vehicle extends EventTarget {
    constructor(name, terrain) {
        super();
        this.name = name;
        this.terrain = terrain;
        this.goods = [];
        this.location = null;
    }

    update() {
        console.log(this.name, 'updated');
    }

    move() {
        console.log(this.name, 'moved');
    }

    parkAt(location) {
        this.location = location;
        this.dispatchEvent(new Event('vehicleParked'));
    }

    load(good) {
        if(good) {
            this.goods.push(good);
            console.log('cargo with destination', good.destination.name, 'loading onto', this.name);
        }
    }

    unload() {
        console.log('cargo with destination', this.goods.destination.name, 'unloading from', this.name);
        const goods = this.goods.shift();
        this.dispatchEvent(new Event('vehicleUnloaded'));
        return goods;
    }
}

export default Vehicle;