//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    let ending = str.substring(str.length - target.length, str.length)
    if (ending === target) {
      return true;
    }
    else {
      return false;
    }
  }

  function confirmEnding(str, target) {
    let ending = str.substring(str.length - target.length, str.length)
    return ending === target
  }