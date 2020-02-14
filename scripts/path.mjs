import Position from "./position.mjs";

class Path {
    constructor(startLocation, endLocation, distance, terrain) {
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.positions = [];
        this.terrain = terrain;

        for(let i = 0; i <= distance; i++) {
            let position = new Position(this, i);
            this.positions.push(this, position);
        };
    }
}

export default Path;