//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let count = {};
    A.forEach(function(x) {
      count[x] = (count[x] || 0) + 1;  
    });
    return parseInt(Object.keys(count).filter(a => count[a]%2 ===1)[0], 10);
  }