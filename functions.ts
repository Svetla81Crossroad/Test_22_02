function greet(): void {
    //console.log("Hello to functions!");
}
greet();

function multiplyNums(numberOne:number, numberTwo: number): number{
    return numberTwo * numberOne;
}

multiplyNums(2, 5);


function displayGreating(firstName:string, lastName:string, age: number): string{
    return `Hello, Mr.${lastName}, ${firstName}. You are ${age} years old.`;
}
const greeting: string= displayGreating("Ivan", "Ivanov", 30);

//console.log (greeting);


function substractNumbers(firstNum:number=10, secondNum:number=5): number{
    return firstNum - secondNum;
}
console.log(substractNumbers(20));

function add(a: number, b: number): number {
    return a + b;
}
const resultCorrect = add(5, 10);
console.log(resultCorrect);
