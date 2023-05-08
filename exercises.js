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

const isAnyValueTrue = (valueA, ValueB) => {
    if (valueA) {
        return true;
    }
    return Boolean(ValueB);
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

/* this worked in codewars:
function _if(bool, func1, func2) {
  if (bool) {return func1()}
  return func2()
}
 */
function booleanFunctionSelector(value, truthyFunction, falsyFunction) {
    if (value) {return truthyFunction();}
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

console.log('~~~~~~~~~~~~~~ The end ~~~~~~~~~~~~~~')