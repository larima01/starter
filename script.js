'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'audio';
// const private = 534;


function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1989);

console.log(age1);
// function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1989);

console.log(age1, age2);



// Arow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);
// console.log(age3);
const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearUntilRetirement(1989, 'Lukas'));
console.log(yearUntilRetirement(2002, 'Habeeb'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} pieces apples and ${orangePieces} pieces oranges.`;
    return juice;
}
const test = fruitProcessor(2, 3);
console.log(test);

const calcAge = function (birthYear) {
}
const yearUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearUntilRetirement(1989, 'Lukmon'));
console.log(yearUntilRetirement(1969, 'Precious'));

*/
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolhins = calcAverage(44, 23, 71);

// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win 🏆 (${scoreDolhins} vs.${scoreKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win 🏆 (${scoreKoalas} vs. ${scoreDolhins}`);
//     } else {
//         console.log('No team wins..');
//     }
// }
// checkWinner(scoreDolhins, scoreKoalas);


// // Test data 2

// scoreDolhins = calcAverage(85, 54, 41);

// scoreKoalas = calcAverage(23, 34, 27);

// checkWinner(scoreDolhins, scoreKoalas);

// const friend1 = "Pelumi";
// const friend2 = "Qudus";
// const friend3 = "Yemi";
// const friends = ['Pelumi', 'Tunde', 'Yemi', 'Abdulganiyu']
//     ;
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Yusuf';

// console.log(friends);

// // friends = ['Bob', 'Alice'];

// const firstName = 'Lukmon';
// const jonas = [firstName, 'Aminu', 2023 - 1989, 'Product Manager', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Excercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1989, 1967, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


const friends = ['Pelumi', 'Tunde', 'Yemi', 'Abdulganiyu'];

friends.push("Jays");

console.log(friends);
