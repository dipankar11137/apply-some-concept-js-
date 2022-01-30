// simple factorial
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial);

// function for loop
function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
var fistResult = factorial(5);
console.log(fistResult);


// function factorial while loop
function getFactorial(num) {
    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let firstFactorial = getFactorial(6);
console.log(firstFactorial);

// while loop reverce
function getFactorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let firstFactorial = getFactorial(6);
console.log(firstFactorial);

// for loop reverce
