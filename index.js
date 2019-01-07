function findMatching(array, name) {
  return array.filter(function(element) {
    return element == name || element == name.toLowerCase();
  });
}

function fuzzyMatch(array, letters) {
  return array.filter(function(element) {
    return element.startsWith(letters)
  });
}

function matchName(collection, person) {
  return collection.filter(function(key) {
    return key["name"] == person;
  });
}
