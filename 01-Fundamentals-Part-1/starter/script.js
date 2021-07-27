'use strict'

// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// console.log('jonas');
// console.log(23);

// let firstName = 'Jonas';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'Programemr';
// let job2 = 'Teacher';

// console.log(myFirstJob);

// true;
// console.log(true);

// //sets javaScriptIsFun as boolean
// let javaScriptIsFun = true
// console.log(javaScriptIsFun);

// //logs typeof to console
// console.log(typeof javaScriptIsFun)
// console.log(typeof true);
// console.log(typeof job2);
// console.log(typeof 'this should say string');

// //changes javaScriptIsFun to string
// javaScriptIsFun = 'YES!'

// //logs new value and typeof for javaScriptIsFun
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun)

// //defines year as empty variable
// let year;

// //logs year value and typeof as undefined
// console.log(year);
// console.log(typeof year);

// //defines new value to year
// year = 1991

// //logs year value and typeof
// console.log(year);
// console.log(typeof year);

// let age = 30;
// age = 45

// console.log(age);

// const day = 'monday';
// // day = 'tuesday';
// console.log(day);

// //throws console error
// // const job;

//
// var job = 'programmer';
// job = 'paperboy';

// Math operators
// const currentYear = 2037
// const ageJonas = currentYear - 1991;
// const ageSarah = currentYear - 2019;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstname = 'Jonas';
// const lastName = 'Schmedtmann';

// console.log(firstname + ' ' + lastName);

// let x = 10 + 5; // x = 15
// console.log(x);

// // Assignment operators
// x += 10; // x = x + 10 = 25
// x *= 4; // 25 x 4 = 100
// x /= 2; // 100 / 2
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // > , <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(currentYear - 1991 > currentYear - 2018);

// const currentYear = 2037
// const ageJonas = currentYear - 1991;
// const ageSarah = currentYear - 2018;

// console.log(currentYear - 1991 > currentYear - 2018);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, 
// console.log(x, y); // (10, 10)

// const averageAge = (ageJonas + ageSarah) / 2; 
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// let year = 2037;

// const jonas = `I'm ` + firstName + `, ` + `a ` + (year - birthYear) + ` year old ` + job + `!`;

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(jonasNew);

// console.log('Sting with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;
// const isOldEnough = age >= 18;

// if(isOldEnough) { 
//     console.log('Sarah can start driving.🏎');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah can't drive. Wait another ${yearsLeft} years. 😭`);
// };

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// };

// console.log(century);

//Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof inputYear, NaN);

// console.log(String(23));

// //Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('I am ' + String(23) + ' years old');

// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' > '18');

// let n = '1' + 1;
// console.log(typeof n);
// n = n - 1; /*'11' - 1 = 10 */
// console.log(n);

// console.log(2+3+4+'5') /*(2+3+4)+'5' = 95 */

//5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// let money = 0;

// if(money){
//     console.log(`Don't spend it all.`);
// } else {
//     console.log('You shoudld get a job.');
// };

// money = 5000

// if(money){
//     console.log(`Don't spend it all.`);
// } else {
//     console.log('You shoudld get a job.');
// };

// let height;

// if (height) {
//     console.log(`Height is defined`);
// } else {
//     console.log(`Height is UNDEFINED`);
// };

// height = '5 feet'

// if (height) {
//     console.log(`Height is defined`);
// } else {
//     console.log(`Height is UNDEFINED`);
// };

// const age = 18;

// if(age === 18) {
//     console.log(`You just became an adult.`);
// };

// console.log(18 === 18);
// console.log(18 === 19);

// console.log('18' === 18);
// console.log(`18` == 18)

// if(age == 18) {
//     console.log(`You just became an adult. (loose)`);
// };

// const favNumber = Number(prompt(`What is your favorite number?`));
// console.log(favNumber);
// console.log(typeof favNumber);

// if(favNumber === 23) {
//     console.log(`23! Yeah!`);
// } else if (favNumber === 7) {
//     console.log(`7. Alright.`);
// } else {
//     console.log(`Pick better numbers.`);
// };


// if(favNumber !== 23) {
//     console.log(`Why not 23?`);
// };

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); 
// console.log(hasDriversLicense || hasDriversLicense);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
//     console.log(`Sarah is able to drive.`);
// } else {
//     console.log(`Someone else should drive.`);
// };

// const isTired = false; // C
// console.log(hasDriversLicense || hasDriversLicense || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive.`);
// } else {
//     console.log(`Someone else should drive.`)
// }

const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break
    default:
        console.log('Not a valid day');
}; 



//////////

//Coding Challenge #1!

// let markHeight = 1.69;
// let johnHeight = 1.95;
// let markMass = 78;
// let johnMass = 92;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// let MarkHighterBMI = markBMI > johnBMI;

// console.log('Test 1');
// console.log(markBMI);
// console.log(johnBMI);
// console.log(MarkHighterBMI);

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;
// MarkHighterBMI = markBMI > johnBMI;

// console.log('Test 2');
// console.log(markBMI);
// console.log(johnBMI);
// console.log(MarkHighterBMI);

//Coding Challenge #2!

// console.log(johnBMI, markBMI);

// if(johnBMI > markBMI) {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// } else {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// };

// // Coding Challenge #3!

// let dolphinsScore = (63 + 108 + 89) / 3
// let koalasScore = (88 + 91 + 110) / 3

// if (dolphinsScore > koalasScore) {
//     console.log(`Dolphins win! 🏆`);
// } else if (koalasScore > dolphinsScore) {
//     console.log(`Koalas win! 🏆`);
// } else if (dolphinsScore == koalasScore) {
//     console.log(`Draw.`);
// } else {
//     console.log(`Error.`);
// };

// // Bonus 1

// dolphinsScore = (97 + 112 + 101) / 3
// koalasScore = (109 + 95 + 123) / 3

// console.log(dolphinsScore);
// console.log(koalasScore);

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//     console.log(`Koalas win! 🏆`);
// } else if (dolphinsScore && dolphinsScore >= 100 == koalasScore && koalasScore >= 100) {
//     console.log(`Draw.`);
// } else {
//     console.log(`Nobody wins.`);
// };

// // Bonus 2

// dolphinsScore = (97 + 112 + 101) / 3
// koalasScore = (109 + 95 + 106) / 3

// console.log(dolphinsScore);
// console.log(koalasScore);

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log(`Dolphins win! 🏆`);
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//     console.log(`Koalas win! 🏆`);
// } else if (dolphinsScore == koalasScore && dolphinsScore >=  100 && koalasScore >= 100) {
//     console.log(`Draw.`);
// } else {
//     console.log(`Nobody wins.`);
// };


//////////

//Practice assigments

//Assignment Part 1

// let country = 'USA';
// let continent = 'North America'
// let population = 100000

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language ; 

// language = 'English';

// console.log(language);

// language = 'Spanish';

// console.log(language);

// console.log(population / 2);
// population++
// console.log(population);
// console.log(population > 6000000);

// const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`

// console.log(description);

// if(population > 33000000) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${33000000 - population} below average.`)
// };

// console.log('9' - '5');
// // = 4
// console.log('19' - '13' + '17');
// // = 617
// console.log('19' - '13' + 17);
// // = 23
// console.log('123' > 57);
// // = true
// console.log(5 + 6 + '4' + 9 - 4 - 2);
// // = 1143

// const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

// console.log(typeof numNeighbours);

// if(numNeighbours === 1) {
//     console.log(`Only 1 border.`);
// } else if(numNeighbours > 1){
//     console.log(`More than 1 border.`);
// } else {
//     console.log(`No borders.`);
// };


//////////

