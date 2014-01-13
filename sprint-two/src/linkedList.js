var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.head) {
      list.head = list.tail = makeNode( value );
    } else {
      list.tail.next = makeNode( value );
      list.tail.next.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value) {
    list.head.previous = makeNode(value);
    list.head.previous.next = list.head;
    list.head = list.head.previous;
  };

  list.removeHead = function() {
      list.head = list.head && list.head.next;
      list.head.previous = null;
  };

  list.removeTail = function() {
    var value = list.tail;
    list.tail = list.tail && list.tail.previous;
    list.tail.next = null;
    return value;
  };

  list.insertAfter = function(node, value) {
    var newNode = makeNode(value);
    newNode.next = node.next;
    if (node.next) {
      node.next.previous = newNode;
    }
    node.next = newNode;
    newNode.previous = node;
    if (node === list.tail) {
      list.tail = newNode;
    }
  };

  list.contains = function(target, node){
    var temp = list.head;
    while(temp !== null ) {
      if (temp.value === target) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
