console.log('~~~~~~~~~~~~~~ Should set alarm ~~~~~~~~~~~~~~')

function shouldSetAlarm(isEmployed, isOnVacation) {
    return isEmployed && !isOnVacation;
}
console.log(shouldSetAlarm(true, true)) // false
console.log(shouldSetAlarm(false,true)) // false
console.log(shouldSetAlarm(true, false)) // true

console.log('~~~~~~~~~~~~~~ The end ~~~~~~~~~~~~~~')