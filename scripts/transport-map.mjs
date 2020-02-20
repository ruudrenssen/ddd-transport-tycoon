class TransportMap extends EventTarget {
	constructor() {
		super();
		this.locations = [];
		this.paths = {};
	}

	addLocation(location) {
		this.locations.push(location);
		this.paths[location.name] = [];
	}

	addPath(location1, location2, time, terrain = "road") {
		this.paths[location1.name].push({
			location: location2,
			time: time,
			terrain: terrain
		});
		this.paths[location2.name].push({
			location: location1,
			time: time,
			terrain: terrain
		});
	}

	getRoute(startLocation, endLocation) {
		console.log('get route for', endLocation);
		let times = {};
		let backtrace = {};
		let pq = new PriorityQueue();

		times[startLocation.name] = 0;

		this.locations.forEach(location => {
			if (location !== startLocation) {
				times[location.name] = Infinity;
			}
		});

		pq.enqueue([startLocation, 0]);
		while (!pq.isEmpty()) {
			let shortestStep = pq.dequeue();
			let currentLocation = shortestStep[0];
			this.paths[currentLocation.name].forEach(neighbor => {
				let time = times[currentLocation.name] + neighbor.time;
				if (time < times[neighbor.location.name]) {
					neighbor.location.time = neighbor.time;
					times[neighbor.location.name] = time;
					backtrace[neighbor.location.name] = currentLocation;
					pq.enqueue([neighbor.location, time]);
				}
			});
		}

		let route = [endLocation];
		let lastStep = endLocation;
		while (lastStep !== startLocation) {
			route.unshift(backtrace[lastStep.name]);
			lastStep = backtrace[lastStep.name];
		}

		return route;
	}

	getNextPath(startLocation, endLocation) {
		console.log('get next path for', endLocation);
		return this.getRoute(startLocation, this.getRoute(startLocation, endLocation)[1]);
	}
}

class PriorityQueue {
	constructor() {
		this.collection = [];
	}

  enqueue(element) {
	if (this.isEmpty()) {
		this.collection.push(element);
	} else {
		let added = false;
		for (let i = 1; i <= this.collection.length; i++) {
			if (element[1] < this.collection[i - 1][1]) {
				this.collection.splice(i - 1, 0, element);
				added = true;
				break;
			}
			}
			if (!added) {
				this.collection.push(element);
			}
		}
	}

	dequeue() {
		let value = this.collection.shift();
		return value;
	}

	isEmpty() {
		return this.collection.length === 0;
	}
}

export default TransportMap;
