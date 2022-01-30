// var inches = 146;
// var feet = inches / 12;
// console.log(feet);


function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchTofeet(myInches);
console.log('My feet : ', feet);

var dadiInches = 144;
var feet = inchTofeet(dadiInches);
console.log('Dadi feet : ', feet);

var naniInches = 156;
var feet = inchTofeet(naniInches);
console.log('Nani feet : ', feet);

// mile to km
function mileToKiomeeter(miles) {
    var km = miles * 1.60934;
    return km;
}

var myMile = 26.2;
var mile = mileToKiomeeter(myMile);
console.log('My kilomeeters ', mile);