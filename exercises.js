console.log('~~~~~~~~~~~~~~ Should set alarm ~~~~~~~~~~~~~~')

function shouldSetAlarm(isEmployed, isOnVacation) {
    return isEmployed && !isOnVacation;
}
console.log(shouldSetAlarm(true, true)) // false
console.log(shouldSetAlarm(false,true)) // false
console.log(shouldSetAlarm(true, false)) // true

console.log('~~~~~~~~~~~~~~ Compare within margin ~~~~~~~~~~~~~~')

function areValuesWithinMargin(valueA, valueB, margin = 0){
    const distance = Math.abs(valueA - valueB);
    if (distance <= margin) {
        return 0;
    }
    if (valueA < valueB) {
        return -1;
    }
    return 1;
}
console.log(areValuesWithinMargin(4, 5)) // -1
console.log(areValuesWithinMargin(2, 5, 3)) // 0
console.log(areValuesWithinMargin(8.1, 5, 3)) // 1

console.log('~~~~~~~~~~~~~~ Boolean logic from scratch ~~~~~~~~~~~~~~')

const isAnyValueTrue = (valueA, valueB) => {
    return !(!valueA && !valueB)
}

const isOnlyOneValueTrue = (valueA, valueB) => {
    if (valueA) {
        return !valueB;
    }
    if (valueB) {
        return !valueA;
    }
    return false;
}

console.log(isAnyValueTrue(false,-66)) // true
console.log(isAnyValueTrue(0,'')) // false
console.log(isAnyValueTrue(true,false)) // true
console.log(isOnlyOneValueTrue(8,'16')) // false
console.log(isOnlyOneValueTrue(0,true)) // true
console.log(isOnlyOneValueTrue('',false)) // false

console.log('~~~~~~~~~~~~~~ The \'if\' function ~~~~~~~~~~~~~~')


function booleanFunctionSelector(value, truthyFunction, falsyFunction) {
    if (value) {
        return truthyFunction();
    }
    return falsyFunction();
}
function yesFunction() {
    return 'Yes';
}
function noFunction() {
    return 'No';
}
console.log(booleanFunctionSelector(7, yesFunction, noFunction)) // Yes
console.log(booleanFunctionSelector(false, yesFunction, noFunction)) // No
console.log(booleanFunctionSelector(undefined, yesFunction, noFunction)) // No

console.log('~~~~~~~~~~~~~~ Transportation on vacation ~~~~~~~~~~~~~~')

function baseCost(days, rate) {
    return days * rate;
}

function discountRate(days) {
    if (days >= 7) {
        return 50;
    }
    if (days >= 3) {
        return 20;
    }
    return 0;
}

function rentalCarCost(days) {
    return baseCost(days, 40) - discountRate(days);
}

console.log(rentalCarCost(1)) // 40
console.log(rentalCarCost(4)) // 140
console.log(rentalCarCost(7)) // 230
console.log(rentalCarCost(10)) // 350

console.log('~~~~~~~~~~~~~~ What\'s the real floor? ~~~~~~~~~~~~~~')

function getRealFloor(americanFloor) {
    if (americanFloor > 13) {
        return americanFloor - 2;
    }
    if (americanFloor > 0) {
        return americanFloor - 1;
    }
    return americanFloor
}

console.log(getRealFloor(-2)) // -2
console.log(getRealFloor(2)) // 1
console.log(getRealFloor(0)) // 0
console.log(getRealFloor(20)) // 18

console.log('~~~~~~~~~~~~~~ Rock Paper Scissors Lizard Spock ~~~~~~~~~~~~~~')

function rockPaperScissorsLizardSpock(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        return 'Draw!';
    }
    const rules = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
    };
    if (rules[playerOne].includes(playerTwo)) {
        return 'Player 1 Won!';
    }
    return 'Player 2 Won!';
}

console.log(rockPaperScissorsLizardSpock('scissors', 'lizard')) // 'Player 1 Won!'
console.log(rockPaperScissorsLizardSpock('spock', 'spock')) // 'Draw!'
console.log(rockPaperScissorsLizardSpock('rock','spock')) // 'Player 2 Won!'

console.log('~~~~~~~~~~~~~~ The end ~~~~~~~~~~~~~~')