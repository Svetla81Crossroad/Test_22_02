//Homework ts
//Exescise 1 - even ot odd
let num: number = 7;
let isEven: boolean = num % 2 === 0;
console.log(`The number ${num} is ${isEven ? "even" : "odd"}.`);


let text: string = "Hello, TypeScript!";
let isLong: boolean = text.length > 10;
console.log(`The text "${text}" ${isLong ? `has more` : `has 10 or fewer`} than 10 characters.`);


//Exescise 3 mi dava error
//let number: number = 5;
let isPositive: boolean = number > 0;
console.log(`The number "${number}" is ${isPositive ? `positive` : `not positive`}.);

//Exescise 4 negative or zero?
let numCheck: number = 5;
let isNonPositive: boolean = numCheck <= 0;
console.log(The number ${numCheck} is ${isNonPositive ? `negative or zero` : `positive`}.);

//Exescise 5

let isEmpty: boolean = message === "Homework";
console.log (The message is ${isEmpty ? "empty" : "not empty"}.);

//Exescise 6
let rangeNumber: number = 25;
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
console.log(The number ${rangeNumber} is ${isInRange ? "within" : "out of"} the range 10 to 100.);