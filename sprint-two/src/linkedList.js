var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (!list.head) {
      list.head = list.tail = makeNode( value );
    } else {
      list.tail.next = makeNode( value );
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
      list.head = list.head && list.head.next
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

  return node;
};
