//console.log("Hello, Type!");


// let vs const
//let number: number = 5;
//number = 10;
//console.log("number", number);

const message: string = "Welcome";

//String
//let welcomeMessage: string = "hello, Peter!";
//let test: string = 'Ivan';

//let welcomeMassageLegth: number = welcomeMessage.length;
//console.log("welcomeMassageLegth", welcomeMassageLegth);

//string interpolation
let welcomeMassageDetails: string = "My welcome message length is ${welcomeMassageLegth}";
//let userWelcomeMessage: string = `Welcome, ${test}`;
//console.log(welcomeMassageDetails);


//numbers
let firstNumber: number = 5;
let secondNumber: number = 10;

//number math operations
let add: number = secondNumber + firstNumber;
let substract: number = secondNumber - firstNumber;
let multiply:  number = secondNumber * firstNumber;
let divide: number = secondNumber / firstNumber;

let result: number = secondNumber * firstNumber;
//console.log("result", result);

//Boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual = firstNumber>= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumberEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
console.log("isNumberEqualTo", isNumberEqualTo);

let isAnyNumberEqualTo: boolean = 6 ===firstNumber || 11 === secondNumber;

//console.log("isGreater", isGreater);


//Any
let stringValue: any = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

console.log("stringValue", stringValue);

const isPositiveNum: string = 5>0? "The nimber is positive": "The number is negative";

const age: number=30;
const myName: string="Pesho";
const personDescription=age<40?`${myName} is younger than 40. He is ${age} old.` : `${myName} is older than 40. He is ${age} years old.`;

//console.log("personDescription", personDescription);
const personName = `His name is "$(myName)".`;
 
//If Else Statement

if (age<40) {
console.log(`Age are lower than 40`)
}
else {
console.log("Age are greater than 40");
}


const num: number=100;

if (num<10) {
    console.log("The number is lower or equal to 10.");
} else if (num > 80) {
    console.log("The number is greater than 100");
} else if (num > 100) {
    console.log("The number is greater then 80 and less than 100.");
} else {
    console.log("The number is between 10 and 100.");
}


//Arrays
type PersonInfoType=string | number;

const personNameInf: PersonInfoType="Ivan";
const PersonAgeInf: PersonInfoType=25;


let welcomeMessage: string = "Hello, Peter!";
