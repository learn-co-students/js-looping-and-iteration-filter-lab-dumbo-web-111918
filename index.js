// Code your solution in this file
function findMatching(drivers, name){
    let results = []
    for (const driver of drivers) {
        if (driver.toLowerCase() == name.toLowerCase()) {
            results.push(driver)
        }
    }
    return results
}
function fuzzyMatch(drivers, name) {
    let results = []
    for (const driver of drivers) {
        if (driver.slice(0, name.length).toLowerCase() == name.toLowerCase()) {
            results.push(driver)
        }
    }
    return results
}

function matchName(drivers, name) {
    let results = []
    for (driver of drivers) {
        if (driver.name == name) {
            results.push(driver)
        }
    }
    return results
}


const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

fuzzyMatch(drivers, "Sa")

