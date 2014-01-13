var makeQueue = function(){
  var instance = {};

  head = 0;
  tail = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  instance.enqueue = function(value){
    instance[ tail++ ] = value; 
  };

  instance.dequeue = function(){

    return head===tail ? 
           null : 
           instance[ head++ ];
  };

  instance.size = function(){
    return tail - head;
  };

  return instance;
};
