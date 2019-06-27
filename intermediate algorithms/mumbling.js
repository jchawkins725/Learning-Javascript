/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
    let count = 1;
    let newString = "";
    for (let i=0; i<s.length; i++) {
      newString += s[i].toUpperCase();
      for (let j=1; j<count; j++) {
        newString += s[i].toLowerCase();
      }
      count++;
      if (i != s.length-1) {
        newString += "-";
      }
    }
    return newString
  }