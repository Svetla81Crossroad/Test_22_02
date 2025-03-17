// let vs const
//let number: number = 5;
number = 10;
var message = "Welcome";
// String
var welcomeMessage = "Hello, Peter!";
var test = "Ivan";
var welcomeMessageLength = welcomeMessage.length;
// String interpolation
var welcomeMessageDetails = "My welcome message length is ".concat(welcomeMessageLength);
var userWelcomeMessage = "Welcome, ".concat(test);
// Number
var firstNumber = 5;
var secondNumber = 10;
//Number math operations
var add = secondNumber + firstNumber;
var substract = secondNumber - firstNumber;
var multiply = secondNumber * firstNumber;
var divide = secondNumber / firstNumber;
// Boolean (true/false)
var isGreater = firstNumber > secondNumber;
var isLower = firstNumber < secondNumber;
var isEqual = firstNumber === secondNumber;
var isGreaterOrEqual = firstNumber >= secondNumber;
var isLowerOrEqual = firstNumber <= secondNumber;
var areNumbersEqualTo = 5 === firstNumber && 10 === secondNumber;
var isAnyNumberEqualTo = 6 === firstNumber || 11 === secondNumber;
// Any
var stringValue = "Hello";
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];
// Ternary operator
var isPositiveNum = 5 > 0 ? "The number is positive" : "The number is negative";
var age = 50;
var myName = "Pesho";
var personDescription = age < 40
    ? "".concat(myName, " is younger than 40. He is ").concat(age, " years old.")
    : "".concat(myName, " is older than 40. He is ").concat(age, " years old.");
var personName = "His name is \"".concat(myName, "\".");
//If Else Statement
if (age < 40) {
    console.log("Age are lower than 40");
}
else {
    console.log("Age are greater than 40");
}
var num = 100;
if (num <= 10) {
    console.log("The number is lower or equal to 10.");
}
else if (num > 80) {
    console.log("The number is greater than 80 and less than 100.");
}
else if (num >= 100) {
    console.log("The number is greater than 100.");
}
else {
    console.log("The number is between 10 and 100.");
}
var personNameInf = "Ivan";
var personAgeInf = 25;
var currentStatus = "fullfiled";
