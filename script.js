/*let a = parseInt(prompt("Insert first number"));
let b = parseInt(prompt("Insert second number"));

function addition() {
    return a + b;
}

console.log(addition()); */


//Create variables to accept first and second user input
let a = parseInt(prompt("Enter first number: ")) ;
let b = parseInt(prompt("Enter second number: ")) ;

//Create an addition function
function addition() {
    // The addition function will return the addition for input a and b
    return a + b ;
}

// invoke addition function to run the calculator
console.log(addition()) ;

