let sum; //addition
let difference; //subtraction
let product; //multiplication
let quotient; //division

function add (num1, num2) {
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

console.log(add(10, 5));
console.log(subtraction(10, 5));
console.log(multiplication(10, 5));
console.log(division(10, 5));