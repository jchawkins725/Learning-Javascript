var Person = function(firstAndLast) {
  let name = firstAndLast
  this.getFullName = function() {
    return name;
  }
  this.getFirstName = function() {
    return name.split(" ")[0];
  }
  this.getLastName = function () {
    return name.split(" ")[1];
  }
  this.setFirstName = function (first){
    name = first + " " + name.split(" ")[1];
  }
  this.setLastName = function (last){
    name = name.split(" ")[0] + " " + last;
  }
  this.setFullName = function (fullname){
    name = fullname;
  }
};
