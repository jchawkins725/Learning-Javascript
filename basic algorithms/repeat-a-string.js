//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let i=0
    let newStr = "";
    while (i < num) {
      newStr += str;
      i++
    }
    return newStr;
 }