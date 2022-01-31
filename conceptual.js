
function pizzaShop(name, value, size) {
    if (name.toLowerCase() != 'pizza') {
        return ("Sorry sir , I have only Pizza");
    }
    if (size != 12) {
        return ('Sorry sir, have only 12inc Pizza');
    }
    if (value > 10) {
        return ('Sorry sir, We have only 10 Pizza');
    }
    let pizzaPrice = value * 320;
    return ('Sir, take it your ' + value + ' Pizza. Your price is $' + pizzaPrice);
}

console.log(pizzaShop('PizZa', 10, 10));