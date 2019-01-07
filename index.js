// Code your solution in this file
function findMatching(arr, str) {
    let str1 = str.toLowerCase();

    const result = arr.filter(function (el) {
        return el === str1 || el === str1.slice(0, 1).toUpperCase() + str1.slice(1)
    });

    return result;

}

function fuzzyMatch(arr, pStr) {
    //how do i check if it the end or middle of the word 
    let nameLength = pStr.length;

    return arr.filter(function (el) {
        return el.slice(0, nameLength) === pStr;
    })
}


function matchName(arr, str) {
    let newArr = arr.filter((el) => {
        return el.name === str
    })
    return newArr;
}
//returns all drivers whose names begin with the provided letters.
//does not return drivers if only middle or ending letters match