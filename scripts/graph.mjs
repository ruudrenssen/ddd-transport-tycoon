class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node.name] = [];
  }

  addEdge(node1, node2, weight, terrain = 'road') {
    this.adjacencyList[node1.name].push({
      node: node2,
      weight: weight,
      terrain: terrain
    });
    this.adjacencyList[node2.name].push({
      node: node1,
      weight: weight,
      terrain: terrain
    });
  }

  getRoute(startNode, endNode) {
    let times = {};
    let backtrace = {};
    let pq = new PriorityQueue();

    times[startNode.name] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node.name] = Infinity
      }
    });

    pq.enqueue([startNode, 0]);
    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep[0];
      this.adjacencyList[currentNode.name].forEach(neighbor => {
        let time = times[currentNode.name] + neighbor.weight;
        if (time < times[neighbor.node.name]) {
          times[neighbor.node.name] = time;
          backtrace[neighbor.node.name] = currentNode;
          pq.enqueue([neighbor.node, time]);
        }
      });
    }

    let path = [endNode];
    let lastStep = endNode;
    while(lastStep !== startNode) {
      path.unshift(backtrace[lastStep.name])
      lastStep = backtrace[lastStep.name]
    }

    return `Path is ${path} and time is ${times[endNode.name]}`
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