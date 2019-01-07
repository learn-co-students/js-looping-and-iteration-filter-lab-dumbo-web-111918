// Code your solution in this file
function findMatching (drivers, name) {
   // debugger
  // for (const name of drivers) {
  //   if(name == "Bobby") {
  //     console.log(name);    }
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
   }

function fuzzyMatch (drivers, name) {
  return drivers.filter(function (driverName) {
    // debugger
    return driverName.slice(0, 2) == name

  })
}

function matchName(drivers, name) {
  debugger
  return drivers.filter(function(driverName) {
    // debugger
    return driverName.name == name
  })
}

// function filter (collection) {
//   for (const name of drivers) {
//     if(findMatching(name)) {
//       console.log(name)
//     }
//   }
//   debugger
// }
