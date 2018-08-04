var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // is contained
  var isContained = false;
  // if current node has target
  if (this.value === target) {
    //cointained is true
    isContained = true;
  } else {
  // else
    for (var i = 0; i < this.children.length; i++) {

      // iterate through children
      // call contains on each child
      // set the result to contains 
      isContained = this.children[i].contains(target);
      // if contained is true
      if (isContained) {
      // return is contained
        return isContained;
      }
    }
  }
  return isContained;
  //return is contained
    
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
