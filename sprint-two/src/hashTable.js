

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get value at index
  var bucket = this._storage.get(index);
  // create bucket
  //var bucket = [];
  // create tuple
  var newTuple = [k, v];
  // if value is undefined
  if (bucket === undefined) {
    // place tuple in bucket
    bucket = [];
    bucket.push(newTuple);
  } else {
    // if the key value pair is the same
    var hasTupleAlready = false;
    _.each(bucket, function(tuple) {
      if (tuple[0] === k) {
        hasTupleAlready = true;
        if (tuple[1] !== v) {
          tuple[1] = v; 
        }
      }
    });
    if (!hasTupleAlready) {
      bucket.push(newTuple);
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket
  var currentBucket = this._storage.get(index);
  // loop through the buket
  var retrievedItem;
  _.each(currentBucket, function(item) {
    if (item[0] === k) {    
      retrievedItem = item[1];
    }
  });
  return retrievedItem;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


