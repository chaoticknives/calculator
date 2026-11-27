let num1;
let num2;
let operator;

let sum; //addition
let difference; //subtraction
let product; //multiplication
let quotient; //division

//elements
const display = document.querySelector('#display');
const smileBtn = document.querySelector('#smileBtn');
const clearDisplayBtn = document.querySelector('#clearDisplayBtn');
const backspaceBtn = document.querySelector('#backspaceBtn');
const divideBtn = document.querySelector('#divideBtn');
const sevenBtn = document.querySelector('#sevenBtn');
const eightBtn = document.querySelector('#eitherBtn');
const nineBtn = document.querySelector('#nineBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const fourBtn = document.querySelector('#fourBtn');
const fiveBtn = document.querySelector('#fiveBtn');
const sixBtn = document.querySelector('#sixBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const oneBtn = document.querySelector('#oneBtn');
const twoBtn = document.querySelector('#twoBtn');
const threeBtn = document.querySelector('#threeBtn');
const addBtn = document.querySelector('#addBtn');
const frownBtn = document.querySelector('#frownBtn');
const zeroBtn = document.querySelector('#zeroBtn');
const decimalBtn = document.querySelector('#decimalBtn');
const equalBtn = document.querySelector('#equalBtn');


//Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.
function addition (num1, num2) {
    sum = num1 + num2;
    return sum;
}

function subtraction (num1, num2) {
    difference = num1 - num2;
    return difference;
}

function multiplication (num1, num2) {
    product = num1 * num2;
    return product;
}

function division (num1, num2) {
    quotient = num1 / num2;
    return quotient;
}

function operate (operator, num1, num2) {
    if (operator === "+") {
        return addition(num1, num2);
    }
    else if (operator === "-") {
        return subtraction (num1, num2);
    }
    else if (operator === "*") {
        return multiplication(num1, num2);
    }
    else if (operator === "/") {
        return division(num1, num2);
    }
}

console.log(operate("+", 10, 5));
console.log(operate("-", 10, 5));
console.log(operate("*", 10, 5));
console.log(operate("/", 10, 5));