// Code your solution in this file!
// function returnFirstTwoDrivers ([]) {
//     const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 
//     function newArray (drivers){
//         return drivers.slice(0,2)
//     }
// }

// 
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function () {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
    return function fareMultiplier (value) {
        return multiplyValue * value
    }
}

function fareDoubler(x) {
    return x * 2
}

function fareTripler(x) {
    return x * 3
}
 function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers()
 }
