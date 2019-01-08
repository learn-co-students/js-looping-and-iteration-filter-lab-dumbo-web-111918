// Code your solution in this file
function findMatching(arr, str) {
    str = str.toLowerCase();
    return arr.filter(function( i ) {
        return i.toLowerCase() === str
    });
}

function fuzzyMatch(arr, partialStr) {
    strLength = partialStr.length
    return arr.filter(function(name) {
        return name.slice(0, strLength) === partialStr
    })
}

function matchName(arr, key) {
    return arr.filter(function(obj){
        return obj["name"].toLowerCase() === key.toLowerCase();
    });
};
