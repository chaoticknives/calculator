let num1;
let num2;
let operator;

let sum; //addition
let difference; //subtraction
let product; //multiplication
let quotient; //division

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