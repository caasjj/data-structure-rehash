var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this._storage = {};
  this._tail = 0;
  this._head = 0;
};
  // Implement the methods below
Queue.prototype.enqueue = function(value){
  this._storage[ this._tail++ ] = value; 
};

Queue.prototype.dequeue = function(){

  return this._head===this._tail ? 
         null : 
         this._storage[ this._head++ ];
};

Queue.prototype.size = function(){
  return this._tail - this._head;
};

