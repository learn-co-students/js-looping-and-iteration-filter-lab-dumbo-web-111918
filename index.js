// Code your solution in this file


function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(name){
    return name.startsWith(letters)
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
