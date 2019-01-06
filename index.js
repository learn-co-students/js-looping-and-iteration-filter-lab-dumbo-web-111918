// Code your solution in this file


function findMatching (array, string) {
  const update = [];
  for (const d of array) {
    if (d.toUpperCase() === string.toUpperCase()) {
      update.push(d);
    }
  }
  return update
}

function fuzzyMatch (array, string) {
  const update = [];
  for (const d of array) {
    if (d.slice(0, string.length).toUpperCase() === string.toUpperCase()) {
      update.push(d);
    }
  }
  return update
}

function matchName (arr, str) {
  const update = [];
  for (const d of arr) {
    debugger
    if (d.name === str) {
      update.push(d);
    }
  }
  return update
}
