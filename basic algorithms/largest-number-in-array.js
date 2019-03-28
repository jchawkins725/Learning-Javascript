//Returns an array consisting of the largest number from each provided sub-array.

//using for loops
function largest(arr) {
    let firstArray = [];
    for (let i=0; i<arr.length; i++) {
      firstArray.push(arr[i][0]);
    }
    for (let n=0; n<arr.length; n++) {
      for (let m=0; m<arr[n].length; m++) {
        if (arr[n][m] > firstArray[n]) {
          firstArray[n] = arr[n][m]
        }
      }
    }
    return firstArray;
}

//using .map
function largest(arr) {
    return arr.map(x => x.reduce((y,z) => (y > z) ? y : z))
    }

