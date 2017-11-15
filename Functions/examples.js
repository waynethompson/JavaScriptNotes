console.log("Program started");

// declaring and calling a simple function
function sayHello(){
    console.log("Hello from a function");
}

// calling the function we created.
sayHello();

// a function returning a value
function sum(a, b){
    return a + b;
}

var result = sum(3, 5);

console.log(result);

// using a function expression
var multiply = function (a, b) {
    return a * b
};

console.log(multiply(2, 3));