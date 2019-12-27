// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(num2){
        return num * num2 
    }
}

const fareDoubler = function(num){
    return num * 2
}

const fareTripler = function(num){
    return num * 3 
}

const selectDifferentDrivers = function(array, functionName){
    if (functionName == returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array)
    }
}