# Javascript Functions

A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Function Declarations

A function definition consists of the function keyword, followed by:

* The name of the function.
* A list of parameters to the function, enclosed in parentheses and separated by commas.
* The JavaScript statements that define the function, enclosed in curly brackets, { }.

### Syntax
```
function functionName(parameters) {
  code to be executed
}
```
## Caling a function
Defining a function does not execute it. Defining the function simply names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters.


### call() and apply() methods


### Function Parameters

Function Parameters are the defined inputs listedin in a function definition.

Function Arguments are the actual values passed in when a function is called.

### The return statment
A JavaScript function can have an optional return statement. This is required if you want to return a value from a function. This statement should be the last statement in a function.

### Examples
``` 
function helloWorld(){
    console.log("Hello World!");
}


function sum(a, b){
    return a + b;
}

function logArguments(){
    console.log(arguments);
}
logArguments('a', 1, true);
```

## Function  Expressions
Functions can also be created by a function expression. Such a function can be anonymous; it does not have to have a name.

```
var multiply = function (a, b) {
    return a * b
};

```

## The Function() Constructor
Another way to declare a function which is rarely used is with the function contructor.

```
var someFunciton = new Function("a", "b", "return a * b");

```





### Hoisting
Using the Function Declaration you can call the function before it is declared as long as it is declared in the same scope.

Using the Function Expression or Function Constructor the function must be declared before it is called. 


## Other uses for return
return can be used to stop the rest of the function from running

## Scope
Variables defined inside a function cannot be accessed from anywhere outside the function.

### Globally scoped variables
```
var foo = "This is a global variable";

function logFoo(){
    console.log(foo);
}

```

### *this* keyword


# Self-Invoking Functions

```
(function(){
    console.log("Hi there");
})();

```

## Functions as Objects


```
var person = function (firstName, lastName){
    this.FirstName = firstName;
    this.LastName = lastName;

    this.FullName = function(){
        return this.FirstName + " " + this.LastName;
    }
}

var wayne = person("Wayne", "Thompson");

console.log(wayne.FullName());

```

## Recursion

```
function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}

```
