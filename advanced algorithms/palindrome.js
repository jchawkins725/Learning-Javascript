function palindrome(str) {
  if (str.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("") === str.toLowerCase().replace(/[\W_]/g, "")) {
    return true;
} else {
  return false;
}
}
