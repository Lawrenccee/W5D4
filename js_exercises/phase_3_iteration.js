Array.prototype.bubbleSort = function () {
  let result = this.slice(0, this.length);

  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      let el1 = result[i];
      let el2 = result[i+1];

      if (el1 > el2) {
        sorted = false;
        [result[i], result[i+1]] = [el2, el1];
      }
    }
  }

  return result;
};

String.prototype.substrings = function () {
  const result = [];

  for (let i = 0; i < this.length; i ++) {
    for (let j = i + 1; j <= this.length; j++) {
      let sub = this.slice(i, j);

      if (!result.includes(sub)) {
        result.push(sub);
      }
    }
  }

  return result;
};

//"cats" => ['c', 'ca', 'cat', 'cats', 'a', 'at']
