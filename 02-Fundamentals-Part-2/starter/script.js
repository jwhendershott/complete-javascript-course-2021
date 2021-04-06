// const calcAge = function (birhtYear) {
//     return 2037 - birhtYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018, 1987];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ['Michael', 'Steven', 'Peter'];

// //adds elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

//removes elements
// const popped = friends.pop(); //removes last elements of array
// console.log(popped);
// console.log(friends);

// friends.shift(); //removes first element
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));


// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// friends.push(23);
// console.log(friends.includes(23))

// if (friends.includes('Steven')) {
//     console.log('Steven is your friend');
//     }   else {
//         console.log("You're a big dumb loser.");
//     }

//Challenge #3

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 :
//     bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips)

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]] 
// console.log(totals);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// console.log(jonas.firstName, jonas.lastName);
// console.log(jonas['firstName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');
// // console.log(jonas[interestedIn]);

// // if(jonas[interestedIn]) {
// //     console.log(jonas[interestedIn])
// // } else {
// //     console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.')
// // }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas)

// // Challenge
// //"Jonas has 3 friendds, and his best friend is called Michael."

// console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0] +'.' );

// //or
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is call ${jonas.friends[0]}.`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year-old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` 
//     }

// };

// // console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge());
// console.log(jonas.age);

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license."

// console.log(jonas.getSummary());

// Challenge #3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 75,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     },
// };

// mark.calcBMI();
// john.calcBMI();

// function result() {
//     if (mark.calcBMI > john.calcBMI) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
//     } else {
//         console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
//     }
// }

// result();

// for loops keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'], 
    true
];

const types = [];

// for (let i = 0; i < jonas.length; i++){
//     console.log(jonas[i], typeof jonas[i])

//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i])
// }

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push (2037 - years[i])
}

console.log(ages);

for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i])
}

for (let i = 0; i < jonas.length; i++){
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i])
}

