// Default parameters 
//default value used when no argument is passed

function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Nikitha");
greet();
greet("MJ");