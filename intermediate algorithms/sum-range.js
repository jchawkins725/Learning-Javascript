//Two numbers are passed. Returns the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    const sortedArray = arr.sort((x,y) => x-y);
    let i=sortedArray[0];
    let sum=0;
    while (i <= sortedArray[1]) {
      sum += i;
      i++;
    }
    return sum;
  }