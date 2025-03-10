// Arrays
//type PersonInfoType = string | number;
//let numbersArray: number[] = [1, 2, 3, 4];
let stringAndNumbersArr: (number | string)[] = [1, "Pesho", "Gosho", 2, "3"];

let fruits: string[] = ["Apple", "Banana", "Pear", "Grape"];
let firstEl: string = fruits[1];
let secondEl:string = fruits[3];

fruits.push("Mango");
//console.log("fruits", fruits);

numbersArray.pop();
fruits.shift();
console.log("fruits", fruits);
//console.log(numbersArray) maha apple


fruits.unshift("Apple")
//console.log("fruits", fruits);


//let multiplyNumbers = numbersArray.map((element:number)=>element * 2);

let multiplyNumbers = numbersArray.map((element: number) => element * 2);

let multiplySpesialNumbers = numbersArray.map((element: number) => {
    if (element > 2) {
        return element * 2;
    } else {
        return element;
    }
});

console.log("multiplySpecialNumbers", multiplySpesialNumbers);

let filterNumsArray = numbersArray.filter((element) => element > 2);

//console.log("filterNumsArray", filterNumsArray);


let colors: string[] = ["red", "green", "blue"];
console.log(colors);

