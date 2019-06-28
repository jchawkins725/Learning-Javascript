/*
Return the number (count) of vowels in the given string.
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const regex = /[aeiou]/g;
    const newArray = str.match(regex);
    if (newArray === null) {
      return 0;
    }
    else {
      return newArray.length;
    }
  }