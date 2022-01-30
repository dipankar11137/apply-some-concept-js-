// variable
var time = '10:15pm';
var bookPrice = 150;
var isWhite = flase;

// array
var partners = ['sajed', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajid');
partners.pop();

// conditionals
if (bookPrice < 120) {
    console.log('i will bye this book');
}
else {
    console.log('Mama ,kachu kom rakho');
}

//while  Loops
var i = 0;
while (i <= 17) {
    console.log('Mama ,kachu kom rakho');
    i++;
}

// Foor loops
for (var i = 0; i <= 17; i++) {
    console.log('Mama ,kachu kom rakho');
}

// function
function isMoonUp(time) {
    if (time >= 19 && time <= 5) {
        return true;
    }
    return false;
}

var moonStatus = isMoonUp(22);

//  let const
// value of the variable could change
let price = 27;
price = 29;
price = 31;

// value off the variable wiil not change
const name = 'Lalu mia';
console.log(name);
