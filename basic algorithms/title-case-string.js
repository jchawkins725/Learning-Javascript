//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    return str.split(" ").map(x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()).join(" ")
  }