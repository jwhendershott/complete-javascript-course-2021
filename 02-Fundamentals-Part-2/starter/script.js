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

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
    bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips)

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]] 
console.log(totals);