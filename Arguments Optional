function addTogether() {
let args = Array.from(arguments);
if (args.length > 1) {
  if (typeof args[0] !=='number' || typeof args[1] !=='number') {
    return undefined;
  }
  else {
    return args[0] + args[1];
  }
}
else if (args.length ===1) {
  let n = args[0];
  if (typeof n !== 'number') {
    return undefined;
  }
  else {
    return function(m) {
      if (typeof m !== 'number') {
        return undefined;
      }
      else {
      return n + m;
      }
    } 
  }
}
}
