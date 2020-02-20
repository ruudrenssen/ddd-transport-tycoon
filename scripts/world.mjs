class World extends EventTarget {
	constructor(map, entities) {
		super();
		this.time = 0;
		this.goodsDelivered = false;
		this.map = map;
		this.locations = entities.locations;
		this.vehicles = entities.vehicles;
		this.goods = entities.goods;

		this.vehicles.forEach(vehicle => {
			vehicle.addEventListener('vehicleParked', this.onVehicleArrived);
		});

		this.goods.forEach(good => {
			good.addEventListener('goodsArrived', this.onGoodsArrived);
		})

		while(!this.goodsDelivered && this.time < 100) {
			this.update();
		}
	}

	update() {
		this.time++;

		this.locations.forEach(location => {
			location.update();
		});

		this.vihicles.forEach(vihicle => {
			vihicle.update();
		});

		this.goods.forEach(good => {
			good.update();
		});
	}

	onVehicleArrived(event) {
		const vehicle = event.target;
		vehicle.load(vehicle.location.getGood());
	}

	onGoodsArrived(event) {
		console.log(event.target.destination);
	}
}

export default World;