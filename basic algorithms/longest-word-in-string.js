function findLongestWordLength(str) {
    let splitString = str.split(" ").map(x => x.length)
    return Math.max(...splitString);
  }