// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {
    return (name.toLowerCase() === string.toLowerCase())
  });
}

 function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {
    return (name.slice(0, string.length).toLowerCase() === string.toLowerCase())
  });
}

 function matchName(drivers, string) {
  return drivers.filter(function (name) {
    return (name.name.toLowerCase() === string.toLowerCase())
  });
}


//   const newCollection = [];
//   for (const name of drivers){
//     if (name.toUpperCase() === string.toUpperCase()) {
//      newCollection.push(name);
//    }
//  }
// return newCollection
// };
//
//
// function fuzzyMatch (array, string) {
//   const newStuff = [];
//   for (const name of array) {
//     if (name.slice(0, string.length).toUpperCase() === string.toUpperCase()) {
//       newStuff.push(name);
//     }
//   }
//   return newStuff
// }
//
//  function matchName (arr, str) {
//   const newStuff = [];
//   for (const name of arr) {
//     if (name.name === str) {
//       newStuff.push(name);
//     }
//   }
//   return newStuff
// }
