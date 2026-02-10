// callback functions

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Nikitha", sayBye);



var add=(a,b) => a+b;
var sub=(a,b) => a-b;
var calculation = (val1, val2, operation) => {
    return operation(val1, val2);
}
console.log(calculation(5,10,add));
console.log(calculation(10,5,sub));