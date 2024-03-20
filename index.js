/* Create a business name generator by combining list of adjectives and shop name and another word.

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let r1 = Math.floor(Math.random() * 20) % 3;
let r2 = Math.floor(Math.random() * 20) % 3;
let r3 = Math.floor(Math.random() * 20) % 3;

let adjective = {
    0: "Crazy",
    1: "Amazing",
    2: "Fire"
};
let ShopName = {
    0: "Engine",
    1: "Foods",
    2: "Garments"
};
let AnotherWord = {
    0: "Bros",
    1: "Limited",
    2: "Hub"
};

console.log(`${adjective[r1]} ${ShopName[r2]} ${AnotherWord[r3]}`);

/* Create a Faulty Calculator using JavaScript

This Faulty Calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operation as follows:

+ ---> -
* ---> +
- ---> /
/ ---> ** 

It performs wrong operations 10% of the times

*/

console.log("Faulty Calculator");
let random = Math.random();
let a = prompt("Enter the First Number");
let b = prompt("Enter the Operation");
let c = prompt("Enter the Second Number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  b = obj[b];
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

/*
Write a JavaScript program to create a new string from a given string taking the first three characters and the last 3 characters of a string and add them together. The string length must be 3 or more, if not, the original string is returned.
*/

const makeNewString = (str) => 
   str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

   console.log(makeNewString('abc'))
   console.log(makeNewString('abcdef'))
   console.log(makeNewString('abc123abc123'))

   console.log(makeNewString('ab'))

// Write a JavaScript program to extract the first half of a string of even length.
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('temple'));
console.log(firstHalf('temp'));
console.log(firstHalf('temples'));

// Write a JavaScript program to concatenate two strings except their first character. 

const concatenate = (str1,str2) => 
str1.slice(1) + str2.slice(1);

console.log(concatenate('abc','def'));
console.log(concatenate('Junior','Developer'));

// Given two values, write a JavaScript program to find out which one is nearest is 100

const closetTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;

console.log(closetTo100(99, 1));
console.log(closetTo100(45, 55));
console.log(closetTo100(50, 50 ));

// Write a JavaScript program to check a given string contains 2 to 4 occurences of a specified character.

const countChars = (str, char) =>
   str.split('').filter(ch => ch === char).length; 

const contains2To4 = (str, char) =>
   countChars(str, char) >= 2 && countChars(str, char) <= 4;

   console.log(contains2To4('ooh!','o'));
   console.log(contains2To4('oh!','o'));
   console.log(contains2To4('oooh!','o'));
   console.log(contains2To4('ooooh!','o'));
   console.log(contains2To4('oooooh!','o'));