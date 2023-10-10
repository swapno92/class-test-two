// *****--1
// addition two number

function additionNumber(x, y) {
    var x;
    var y;
    var z = x + y;

    return z;
}
console.log(additionNumber(5, 10));

// multiplication two numbers

function multiplicationNumber(a, b) {
    var a;
    var b;
    var c = a * b;

    return c;
}
console.log(multiplicationNumber(5, 6));

// Subscription two numbers

function subscriptionNumber(a, b) {
    var a;
    var b;
    var c = a - b;

    return c;
}
console.log(subscriptionNumber(30, 5));

// Division two numbers 

function divisionNumbers(a, b) {
    var a;
    var b;
    var c = a / b;

    return c;
}
console.log(divisionNumbers(50, 2));

// *****--2
// convert a string into uppercase

var myName = "hello world"

console.log(myName.toUpperCase())

// *****--3
// student grade sheet

var marks = 68;

if (marks >= 80) {
    console.log("A+")
} else if (marks >= 75) {
    console.log("A")
} else if (marks >= 70) {
    console.log("A-")
} else if (marks >= 60 && marks < 65) {
    console.log("B+")
} else if (marks > 50) {
    console.log("B")
} else if (marks > 40) {
    console.log("C")
}

else {
    console.log("Fail")
}