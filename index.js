// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (elm) {
    return (elm.toLowerCase() === string.toLowerCase())
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (elm) {
    return (elm.slice(0, string.length).toLowerCase() === string.toLowerCase())
  });
}

function matchName(drivers, string) {
  return drivers.filter(function (elm) {
    return (elm.name.toLowerCase() === string.toLowerCase())
  });
}