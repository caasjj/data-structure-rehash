var makeTree = function(value, parent){
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = parent;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children = this.children || [];
  this.children.push( makeTree(value, this) );
};

treeMethods.contains = function(target){
  if( this.value === target ) return true;
  if (this.children) {
    for(var i=0; i<this.children.length; i++) {
      if (this.children[i].contains(target) ) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.removeFromParent = function() {
  if (this.parent) {
    this.parent.children.splice(this.parent.children.indexOf( this ), 1);
  }
  this.parent = null;
}

