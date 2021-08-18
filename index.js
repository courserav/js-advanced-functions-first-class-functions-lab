// Code your solution in this file!
let returnFirstTwoDrivers = function(array){
    let newArray = [array[0], array[1]]
    return newArray
}

let returnLastTwoDrivers = function(array){
    let full = array.length
    let newArray = [array[full - 2], array[full - 1]]
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return multiplier * fare
    }
}

const fareMulti2 = createFareMultiplier(2)

function fareDoubler(fare){
    return fareMulti2(fare)
}

const fareMulti3 = createFareMultiplier(3)

function fareTripler(fare){
    return fareMulti3(fare)
}

function selectDifferentDrivers(drivers, dFunction){
    return dFunction(drivers)
}