

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
  this.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  // delete from edges 
  delete this.edges[node];
  // fro key in edges
  for (var edge in this.edges) {
    //debugger;
    // if this key has property of node we want to remove
    if (this.edges[edge].hasOwnProperty(node)) {
      delete this.edges[edge][node];
    }
  }    
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromEdges = this.edges[fromNode] || null;
  var toEdges = this.edges[toNode] || null;
  if (fromEdges && toEdges) {
    if (fromEdges.hasOwnProperty(toNode) && toEdges.hasOwnProperty(fromNode)) {
      return true;
    }
    return false;
  } else {
    return false;
  }  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode][toNode] = toNode;
  this.edges[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode][toNode];
  delete this.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through each node
  // call the call back
  _.each(this.nodes, function(edge) {
    cb(this.nodes[edge]);
  }, this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


