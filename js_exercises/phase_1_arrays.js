Array.prototype.uniq = function() {
  const result = [];

  this.forEach(
    function(num) {
      if (!result.includes(num)) {
        result.push(num);
      }
    }
  );

  return result;
};

Array.prototype.twoSum = function () {

  const result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }

  return result;
};

Array.prototype.transpose = function () {
  const result = Array(this[0].length).fill(0).map(x => Array(this.length).fill(0));

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[0].length; j++) {
      result[j][i] = this[i][j];
    }
  }

  return result;
};
