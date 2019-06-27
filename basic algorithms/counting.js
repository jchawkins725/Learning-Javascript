// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// For example, if n = 10: return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function count(n) {
    const arr = [];
    for (let i=1; i<=n; i++) {
      arr.push(i);
    }
    return arr;
  }