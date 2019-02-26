function rot13(str) { // LBH QVQ VG!
  let unicodeString = str.split("").map(x => x.charCodeAt());
  for (let i=0; i<unicodeString.length; i++) {
    if (unicodeString[i] >= 65 && unicodeString[i]<=77) {
      unicodeString[i]+=13;
    }
    else if (unicodeString[i] >=78 && unicodeString[i]<=90) {
      unicodeString[i]-=13;
    }
    else {
      unicodeString[i];
    }
  }
  return String.fromCharCode(...unicodeString)
}
