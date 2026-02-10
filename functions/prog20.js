// constructor functions

function person(name,place){
    this.name = name;
    this.place = place;

}
let user = new person("Nikitha","Chittoor");
console.log("my name is" + " " + user.name);
console.log("I am from" +" " + user.place);