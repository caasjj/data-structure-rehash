var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance._head = 0;
  instance._tail=0;
  instance._storage = {};

  return instance;
};

var queueMethods = {
	enqueue: function(value) {
		this._storage[ this._tail++ ] = value;
	},
	dequeue: function() {
		return this._head===this._tail ? 
		       null : 
		       this._storage[ this._head++ ];
	},
	size: function() {
		return this._tail - this._head;
	}

};