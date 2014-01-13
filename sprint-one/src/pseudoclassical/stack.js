var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  this._storage = {};
  this._size = 0;
};

// Implement the methods below
Stack.prototype.push = function(value){
  this._storage[ this._size++ ] = value;
};

Stack.prototype.pop = function(){
  return this._size && this._storage[ --this._size ];
};

Stack.prototype.size = function(){
  return this._size;
};

