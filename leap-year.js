function isLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return true;
    }
    return false;
}

const myYear = 2400;
const isMyLeapYear = isLeapYear(myYear);
console.log('is my leap year', isMyLeapYear);