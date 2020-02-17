class Map {
    constructor(locations) {
        this.locations = [];
        this.paths = {};
        locations.forEach(location => {
            this.addLocation(location);
        })
    }

    addLocation(location) {
        this.locations.push(location);
        this.paths[location] = [];
    }

    addPath(startLocation, endLocation, distance, terrain) {
        this.paths[startLocation].push({location: endLocation, distance: distance, terrain: terrain});
        this.paths[endLocation].push({location: startLocation, distance: distance, terrain: terrain});
    }

    getRoute(startLocation, endLocation) {
        let times = {};
        let backtrace = {};
        let pq = new PriorityQueue();

        times[startLocation] = 0;

        this.locations.forEach(location => {
            if (location !== startLocation) {
                times[location] = Infinity
            }
        });

        pq.enqueue([startLocation, 0]);

        while (!pq.isEmpty()) {
            let shortestStep = pq.dequeue();
            let currentLocation = shortestStep[0];
            this.paths[currentLocation].forEach(neighbor => {
                let time = times[currentLocation] + neighbor.distance;
                if (time < times[neighbor.location]) {
                    times[neighbor.location] = time;
                    backtrace[neighbor.location] = currentLocation;
                    pq.enqueue([neighbor.location, time]);
                }
            });
        }

        let path = [endLocation];
        let lastStep = endLocation;

        while(lastStep !== startLocation) {
            path.unshift(backtrace[lastStep])
            lastStep = backtrace[lastStep]
        }

        return `Path is ${path} and time is ${times[endLocation]}`
    }
}

class PriorityQueue {
    constructor() {
        this.pathCollection = [];
    }

    enqueue(element){
        if (this.isEmpty()){
          this.collection.push(element);
        } else {
          let added = false;
          for (let i = 1; i <= this.collection.length; i++) {
                if (element[1] < this.collection[i-1][1]) {
                    this.collection.splice(i-1, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added){
                this.collection.push(element);
            }
        }
    };

    dequeue() {
        return this.pathCollection.shift();
    }

    isEmpty() {
        return (this.pathCollection.length === 0)
    }
}

export default Map;