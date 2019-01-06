// Code your solution in this file

//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

 function findMatching(drivers, name){

	return drivers.filter(function(element) {
    return element.toLowerCase() === name.toLowerCase();
	});
}

function fuzzyMatch(drivers, string){

	return drivers.filter(function(element) {
		let searchTerm = element.slice(0, string.length);
    if (searchTerm.toLowerCase() === string.toLowerCase()) {
      return element;
    }
	});
}

function matchName(drivers, string){
  return drivers.filter(function(element) {
    return element.name.toLowerCase() === string.toLowerCase();
  });
}
