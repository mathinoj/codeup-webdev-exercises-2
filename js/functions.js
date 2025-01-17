"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello (name){
    let toLow = name.toLowerCase();
    let toUpper = toLow.charAt(0).toUpperCase() + toLow.slice(1);
    return "Hello there " +toUpper+ "!";
}
// console.log(sayHello())
// sayHello()

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
function sayHello2(name){
    console.log(name)
    let helloMessage = `Hello to you, ${name}`;
    return helloMessage;
}
// let msg = sayHello()


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

    let myName = 'Matthias'

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);
console.log(random)
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number){
    console.log(`The number is ${number}`)
    if(number === 2){
        return 'True, does equal to 2!'
    } else {
        return 'False, does not equal to 2.';
    }
}
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tipPercent, total){
    // const sum = firstNumb + secondNumb;
    return tipPercent * total;
}
console.log(calculateTip(.5, 20))
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
function x(billTotal, percentage){
let billTot = prompt('What is the total of your bill?')
let yourPercent = prompt('How much you wanna tip?')
    console.log('billT: ' +billTot)
    let decimalPercent = yourPercent/100
    let yourTip = (billTot * decimalPercent).toFixed(2);
    alert(`Your tip will be $${yourTip}`)
}
// console.log(x());

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discountPercentage){
// let origPrice = price;
// let discount = discountPercentage;
// let applyDisc = origPrice*discount;
    return price - (price * discountPercentage);
}
// console.log(applyDiscount())


function trim(string, maxLength){
    let i = string.length
    console.log("i-Length: " +i)
    let u = maxLength - 3;
    let v = string.slice(0, maxLength);
    let a = string.slice(0, u);
    let s = a + "...";
    if(i > maxLength){
        console.log(s)
        } else if(i <= maxLength){
        console.log(string)
        } else if(i <= 3 && maxLength <= 3){
        console.log(v + "...")
        console.log("zL: " +v.length)
        }
    }