// const number = 7;
// if (number % 2 == 0) {
//     console.log('Even Number');
// }
// else {
//     console.log('Odd Number');
// }

// const remainder = number % 2;
// console.log(remainder == 0);

// function

function isEven(numberA) {
    if (numberA % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 1645;
const isMyNumber = isEven(myNumber);
console.log(isMyNumber);

function isOdd(numberB) {
    if (numberB % 2 == 1) {
        return true;
    }
    return false;
}

const herNumber = 1645;
const isHerNumber = isOdd(herNumber);
console.log(isHerNumber);