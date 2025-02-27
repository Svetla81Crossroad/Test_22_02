//console.log("Hello, Type!");


// let vs const
let number: number = 5;
number = 10;
//console.log("number", number);


//String
let welcomeMessage: string = "hello, Peter!";
let test: string = 'Ivan';

let welcomeMassageLegth: number = welcomeMessage.length;
//console.log("welcomeMassageLegth", welcomeMassageLegth);

//string interpolation
let welcomeMassageDetails: string = "My welcome message length is ${welcomeMassageLegth}";
//console.log(welcomeMassageDetails);


//numbers
let firstNumber: number = 5;
let secondNumber: number = 10;

let result: number = secondNumber * firstNumber;
//console.log("result", result);

//Boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual = firstNumber>= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let isAnyNumberEqualTo: boolean = 6 ===firstNumber || 11 === secondNumber;

//console.log("isGreater", isGreater);


const isPositiveNum: string = 5>0? "The nimber is positive": "The number is negative";

const age: number=30;
const myName: string="Pesho";
const personDescription=age<40?`${myName} is younger than 40. He is ${age} old.` : `${myName} is older than 40. He is ${age} years old.`;

//console.log("personDescription", personDescription);

 
//If Else Statement

if (age<40) {
console.log(`Age are lower than 40`)
}
else {
console.log("Age are greater than 40");
}


const num: number=50;

if (num<10) {
    console.log("The number is lower then 10.");
} else if (num > 100) {
    console.log("The number is greater than 100");
} else {
    console.log("The number is between 10 and 100.");
}


//Arrays
type PersonInfoType=string | number;

const personNameInf: PersonInfoType="Ivan";
const PersonAgeInf: PersonInfoType=25;

