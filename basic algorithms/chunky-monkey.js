//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let finalArray = [];
    for (let i=0; i<arr.length; i+=size) {
        finalArray.push(arr.slice(i,size+i));
    }
    return finalArray;
  }