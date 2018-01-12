function range(start, end) {
  if (start > end) {
    return [];
  }

  if (start === end) {
    return [start];
  } else {
    return [start].concat(range(start+1, end));
  }
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + sumRec(arr);
  }
}

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * exponent1(base, exp - 1);
  }
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    const subResult = exponent2(base, exp / 2);
    return subResult * subResult;
  } else {
    const subResult = exponent2(base, (exp - 1) / 2);
    return base * subResult * subResult;
  }
}

function fibonnaci(n) {
  if (n < 1) {
    return null;
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  let lastFib = fibonnaci(n - 1);

  return lastFib.concat(lastFib[lastFib.length-1] + lastFib[lastFib.length-2]);
}

var getType = function (elem) {
  return Object.prototype.toString.call(elem);
};

function deepDup(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    if (getType(el) === "[object Array]") {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  }

  return result;
}

function bsearch(arr, target) {
  const midpoint = Math.floor(arr.length / 2);

  console.log(arr);

  if (arr.length === 0) {
    return -1;
  }

  if (target === arr[midpoint]) {
    return midpoint;
  } else if (target < arr[midpoint]) {
    return bsearch(arr.slice(0, midpoint), target);
  } else if (target > arr[midpoint]) {
    const upper = bsearch(arr.slice(midpoint + 1, arr.length), target);
    if (upper !== -1) {
      return midpoint + upper + 1;
    } else {
      return upper;
    }
  }
}
