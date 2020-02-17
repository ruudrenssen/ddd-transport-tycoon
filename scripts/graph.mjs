class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node.id] = [];
  }

  addEdge(node1, node2, weight, terrain = 'road') {
    this.adjacencyList[node1.id].push({
      node: node2,
      weight: weight,
      terrain: terrain
    });
    this.adjacencyList[node2.id].push({
      node: node1,
      weight: weight,
      terrain: terrain
    });
  }

  getRoute(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode.id] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node.id] = Infinity
      }
    });

    pq.enqueue([startNode, 0]);
    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep[0];
      this.adjacencyList[currentNode.id].forEach(neighbor => {
        let time = times[currentNode.id] + neighbor.weight;
        if (time < times[neighbor.node.id]) {
          times[neighbor.node.id] = time;
          backtrace[neighbor.node.id] = currentNode;
          pq.enqueue([neighbor.node, time]);
        }
      });
    }

    let route = [endNode];
    let lastStep = endNode;
    while(lastStep !== startNode) {
      route.unshift(backtrace[lastStep.id])
      lastStep = backtrace[lastStep.id]
    }

    return route;
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
    return (this.collection.length === 0)
  }
}

export default Graph;