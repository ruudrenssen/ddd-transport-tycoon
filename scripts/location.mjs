class Location extends EventTarget {
    constructor(name) {
        super();
        this.name = name;
        this.goods = [];
        this.vihicles = [];
    }

    update() {
        console.log('update', this.name);
    }

    getVihicle() {
        console.log('get vehicle', this.name, 'from', this.name);
        return this.vihicles.shift();
    }

    addVihicle(vihicle) {
        console.log('add', vihicle.name, 'to', this.name);
        vihicle.parkAt(this);
        this.vihicles.push(vihicle);
    }

    getGood() {
        if(this.goods.length > 0) {
            const good = this.goods.shift();;
            console.log('getting good for', good.destination.name)
            return good;
        } else {
            return false;
        }
    }

    addGood(good) {
        console.log('adding good for', good.destination.name, 'to', this.name);
        this.goods.push(good);
    }

    addVehicles(vihicles) {
        if(Array.isArray(vihicles)) {
            vihicles.forEach(vihicle => {
                this.addVihicle(vihicle);
            });
        } else {
            this.addVihicle(vihicle);
        }
    }

    addGoods(goods) {
        if(Array.isArray(goods)) {
            goods.forEach(supply => {
                this.addGood(supply);
            });
        } else {
            this.addGood(goods);
        }
    }
}

export default Location;