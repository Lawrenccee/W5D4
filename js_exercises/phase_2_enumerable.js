Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    let el = this[i];

    callback(el, i, this);
  }
};

Array.prototype.myMap = function (callback) {
  const result = [];

  this.myEach(function(el) {
    result.push(callback(el));
  });

  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  this.myEach((el, idx) => {
    if ((initialValue === undefined) && (idx === 0)) {
      initialValue = el;
    } else {
      initialValue = callback(initialValue, el);
    }
  });

  return initialValue;
};
