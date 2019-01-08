// Code your solution in this file

function findMatching(array, name) {
    const match = array.filter(function(element){
      return element.toLowerCase() === name.toLowerCase();
})
return match;
}

function fuzzyMatch(array, abbName) {
  const match = array.filter(function(element){
    return element.toLowerCase().slice(0,2) === abbName.toLowerCase()
  })
  return match;
}

// array.select do |element|
//   element == somethingelse
// end

function matchName(array, name) {
  const sameName = array.filter(function(object) {
    return object.name.toLowerCase() === name.toLowerCase();
  })
  return sameName;
}


// for(const object of array) {
  //   for(const key in object) {
    //     if (object[key].toLowerCase() === name.toLowerCase()) {
      //       return name;
      //     }
      //   }
      // }


















      // function matchName(array, name) {
        //   const sameName = array.filter(function(object) {
          //     console.log("cool")
          //     return object.name.toLowerCase() === name.toLowerCase()
          //   })
          //   return sameName;
          // }
