console.log("Hello, Type!");


// let vs const
//let number: number = 5;
//number = 10;
//console.log("number", number);


//String
let welcomeMessage: string = "hello, Peter!";
let test: string = 'Ivan';

let welcomeMassageLegth: number = welcomeMessage.length;
console.log("welcomeMassageLegth", welcomeMassageLegth);

//string interpolation
let welcomeMassageDetails: string = "My welcome message length is ${welcomeMassageLegth}";
console.log(welcomeMassageDetails);


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

Let isAnyNumberEqualTo: boolean = 6 ===firstNumber || 11 === secondNumber;

console.log("isGreater", isGreater);




