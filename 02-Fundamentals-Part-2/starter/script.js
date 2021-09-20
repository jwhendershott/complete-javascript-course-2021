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

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// };

// const calcAge3 = birthYear => 2037 - birthYear;

// const age3 = calcAge3(1991);

// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years.`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1987, 'Jacob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} of apple and ${orangePieces} of orange.`
//     return juice;
// };

// console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     const retired = `He's already retired.`

    // if (retirement > 0) {
    //     return retirement;
    // } else {
    //     return retired
    // }

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`)
//         return retirement;
//     } else {
//         return retired
//     }

//     // return retirement;
//     // return `${firstName} retires in ${retirement} years.`
// };

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1970, 'Jacob'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas.length);

// //Exercise
// function calcAge1(birthYear) {
//         return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = (calcAge1(years[0]));
// const age2 = (calcAge1(years[1]));
// const age3 = (calcAge1(years[years.length -1 ]));

// const ages = [age1, age2, age3];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// //Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes(23));

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter.');
// } else {
//     console.log(`You're a stupid loser with no friends.`);
// }


/**********Coding challenges**********/

// Coding Challenge #1

// const calcAverage = (dolphinScore, koalaScore) => {
//     const avgDolphins = dolphinScore;
//     const avgKoalas = koalaScore;
//     // console.log(dolphinScore);
//     // console.log(koalaScore);
//     console.log(avgDolphins, avgKoalas)
//     return avgDolphins, avgKoalas
// };

// function checkWinner (avgDolphins, avgKoalas) {
    
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win!🐬`);
//     } else {
//         console.log(`Koalas win!🐨`)
//     }
// }

// calcAverage((44 + 23 + 71) / 3, (65 + 54 + 49) / 3);
// calcAverage((85 + 54 + 41) / 3, (23 + 34 + 27) / 3);
// checkWinner(avgDolphins, avgKoalas)

// const calcAverage = (a, b, c) => (a + b + c) / 3 

// // const scoreDolphins = calcAverage(44, 23, 71);
// // const scoreKoalas = calcAverage(65, 54, 49)

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27)

// const checkWinner = function(avgDolphins, avgKoalas) {
    
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win!🐬`);
//     } else if (avgKoalas >= 2 * avgKoalas){
//         console.log(`Koalas win!🐨`)
//     } else {
//         console.log('Nobody wins.')
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// Coding Challene #2

// const bills = [125, 555, 44];

// function calctip (bill) {
        
//     if (bill >= 50 && bill <= 100 ) {
//         var tip = 0
//         var tip = bill * .15;
//     } else {
//         var tip = 0
//         var tip = bill * .2;
//     }

//     console.log(tip);

// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
// } 

// const bills = [124, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
