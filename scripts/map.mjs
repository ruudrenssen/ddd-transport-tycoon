class Map {
	constructor() {
		this.locations = [];
		this.adjacencyList = {};
	}

	addLocation(location) {
		this.locations.push(location);
		this.adjacencyList[location.id] = [];
	}

	addPath(location1, location2, weight, terrain = "road") {
		this.adjacencyList[location1.id].push({
			location: location2,
			weight: weight,
			terrain: terrain
		});
		this.adjacencyList[location2.id].push({
			location: location1,
			weight: weight,
			terrain: terrain
		});
	}

	getRoute(startLocation, endLocation) {
		let times = {};
		let backtrace = {};
		let pq = new PriorityQueue();

		times[startLocation.id] = 0;

		this.locations.forEach(location => {
			if (location !== startLocation) {
				times[location.id] = Infinity;
			}
		});

		pq.enqueue([startLocation, 0]);
		while (!pq.isEmpty()) {
			let shortestStep = pq.dequeue();
			let currentLocation = shortestStep[0];
			this.adjacencyList[currentLocation.id].forEach(neighbor => {
				let time = times[currentLocation.id] + neighbor.weight;
				if (time < times[neighbor.location.id]) {
					times[neighbor.location.id] = time;
					backtrace[neighbor.location.id] = currentLocation;
					pq.enqueue([neighbor.location, time]);
				}
			});
		}

		let route = [endLocation];
		let lastStep = endLocation;
		while (lastStep !== startLocation) {
			route.unshift(backtrace[lastStep.id]);
			lastStep = backtrace[lastStep.id];
		}

		return route;
	}

	getPath(startLocation, endLocation) {
		return this.adjacencyList[startLocation.id].find((path) => path.location === endLocation);
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

export default Map;
