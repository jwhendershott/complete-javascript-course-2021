'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = '12345';

// function logger() {
//     console.log('My name is Jonas');
// };

// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// };

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);

// function calcAge1(birthYear) {
//         return 2037 - birthYear;
// };

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//     return 2037- birthYear
// };

// const age2 = calcAge2(1991);

// console.log(age2);

const calcAge2 = function (birthYear) {
    return 2037- birthYear
};

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);

console.log(age3);