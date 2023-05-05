/*
0 '' false undefined null NaN
*/

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

if (false) {

}

if (0) {

}

if ('') {

}

if (null) {

}

if (undefined) {

}

if (NaN) {

}

/*
1, true, 'something', -1
*/

console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean('something'));
console.log(Boolean(-1));

if (true) {

}
if (1) {

}
if ('something') {

}
if (-1) {

}

const name = null;

if (name) {
    console.log('Your name is ' + name);
} else {
    console.log('No name is provided');
}

console.log('hello' === 'hello');
console.log('HI' === 'hi');

console.log(5 === '5');
console.log(5 == '5');

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

function isUndefined(value) {
    return value === undefined;
}

function isNull(value) {
    return value === null;
}

isUndefined(true);
isUndefined(false);
isUndefined(undefined);
isNull(null);

// const value = null;
// if (isNull(value) || isUndefined(value)) {
//   console.log('The value is null or undefined');
// }

getName('Adam'); // 'Adam'
getName(); // Jan Kowalski

const myValue = 0 || false || 12 || 24;
console.log(myValue);

function getName(name) {
    return name || 'Mike';
}

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

const hour = 12;
const minute = 0;

const isNoon = hour === 12 && minute === 0;
if (isNoon) {
    console.log('It is Noon');
} else {
    console.log('It is not Noon');
}

const ten = 10;
if (isNull(ten) && isUndefined(ten)) {
    console.log('The value is null and undefined');
} else {
    console.log('The value is not null and undefined');
}

// 1 && 20 && 0 && false
if (0) {

}

if (1 && 20 && 0 && false) {

}

const value = 1 && 20 && 0 && false;
console.log(value);


function isTeenageAge(age) {
    return age > 10 && age < 20;
}

isTeenageAge(10); // false
isTeenageAge(15); // true
isTeenageAge(20); // false

/*
*/

console.log(Boolean(0)); // false
console.log(!1); // false
console.log(!true); // false
console.log(!false); // true

const fifteen = 15;
if (fifteen !== undefined) {
    console.log('The value is not undefined');
}

function isNotNull(someValue) {
    return !isNull(someValue);
}

isNotNull(null); // false
isNotNull(true); // true

console.log('false && false', false && false);

console.log(true || false && false); // true
console.log(true || (false && false)); // true

console.log('true || false && false', (true || false) && false);

const isMainLightGreen = false;
const isTheConditionalLightOn = true;
const didTheCarStop = true;

function canCarGoRight(mainLight, conditionalLight, carStopped) {
    return mainLight || (conditionalLight && carStopped);
}

canCarGoRight(
    isMainLightGreen,
    isTheConditionalLightOn,
    didTheCarStop
)