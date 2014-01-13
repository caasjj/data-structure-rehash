var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  _.extend(instance, stackMethods);
  instance._storage = {};
  instance._size = 0;

  return instance;
};
  
var stackMethods = {
	push: function(value) {
		this._storage[ this._size++ ] = value;
	},
	pop: function(value) {
		return this._size && this._storage[ --this._size ];
	},
	size: function() {
		return this._size;
	}
};