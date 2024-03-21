console.log("Hello world!");

let number = 100;
console.log(number); // Output: 100

let cars = 20;
let trains = 5;
let travel = cars + trains;

console.log(travel); // Output: 25

let name = "Sherlock";
console.log(name); // Output: Sherlock

let firstName = "Sherlock";
let lastName = "Holmes";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Sherlock Holmes

//string literals
let firstName2 = "Joan";
let lastName2 = "Watson";
let fullName2 = `${firstName2} ${lastName2}`;

console.log(fullName2); // Output: Joan Watson

let firstName3 = "Thisisastring";
console.log(`${firstName3} is ${firstName3.length} characters long`);

let isTrue = true;
console.log(isTrue); // Output: true
let isFalse = false;
console.log(isFalse); // Output: false


let e = 1;
let f = 2;
let isAGreaterThanB = e > f;
let isALessThanB = e < f;
let isAEqualToB = e === f;

console.log(isAGreaterThanB); // Output: false
console.log(isALessThanB); // Output: true
console.log(isAEqualToB); // Output: false

console.log(`Is ${e} greater than ${f}?`, isAGreaterThanB); // Output: Is 1 greater than 2? false
console.log(`Is ${e} less than ${f}?`, isALessThanB); // Output: Is 1 less than 2? true
console.log(`Is ${e} equal to ${f}?`, isAEqualToB); // Output: Is 1 equal to 2? false

let favouriteDayOfTheWeek = "Friday";
let daysOfTheWeek = 7;
let daysFromFriday = 1;

const sentence = `Out of the ${daysOfTheWeek},my favourite day is ${favouriteDayOfTheWeek}. We are ${daysFromFriday} day away! `;
console.log(sentence);