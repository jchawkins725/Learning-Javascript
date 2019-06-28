//you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    const array = numbers.split(" ").sort(function(a,b){return a-b});
    return array[array.length -1] + " " + array[0];
  }

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"