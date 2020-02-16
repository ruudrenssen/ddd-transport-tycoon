import Path from './path.mjs';

class Map {
    constructor(locations) {
        this.locations = locations;
        this.paths = [];
    }

    createPath(startLocation, endLocation, distance, terrain) {
        this.paths.push(new Path(startLocation, endLocation, distance, terrain));
    }

    getRoute(origin, destination, paths = []) {
        let route = paths;
        this.paths.forEach(path => {
            if (path.startLocation === origin || path.endLocation === origin) {
                // path for origin founded, find paths to endLocation
                console.log(origin);
                
            }
        });
        return route;
    }
}


export default Map;