var HashTable = function(){
  this._limit = 8;
  this._size = 0;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for(var j=0; j<bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket[j] = [k, v];
      break;
    }
  }
  if (j === bucket.length) {
    bucket.push([k,v]);
    this._size++;
  }
  this._storage.set(i, bucket);
  if (this._size >= this._limit * 0.75) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for(var j=0; j<bucket.length; j++) {
    if (bucket[j][0] === k) return bucket[j][1];
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for(var j=0; j<bucket.length; j++) {
    if (bucket[j][0] === k) {
      bucket.splice(j,1);
      this._size--;
    }
  }
  if (this._size < this._limit * 0.25) {
    this.resize( this._limit * 0.5 );
  }
};

HashTable.prototype.resize = function(size) {
  var temp = this._storage;
  var oldLimit = this._limit;
  this._storage = makeLimitedArray(size);
  this._size = 0;
  this._limit = size;
  var bucket;
  for(var i=0; i < oldLimit; i++ ) {
    bucket = temp.get(i) || [];
    for(j=0; j<bucket.length; j++) {
      this.insert( bucket[j][0], bucket[j][1]);
    }
  }
}

