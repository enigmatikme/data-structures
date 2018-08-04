var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    var decapitated = list.head.value;
    list.head = list.head.next;
    return decapitated;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.value !== target) {
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
