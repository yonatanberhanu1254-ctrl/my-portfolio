//callback function example
function greet(name, callback) {
    console.log("Hello", name);
    callback();
}

function goodbye() {
    console.log("Goodbye!");
}

greet("Yoni", goodbye);
//creating object
const person={
    firstName:"Yonatan",
    lastName:"Berhanu",
    age:21,
job:"Student",
fullName:function(){
    this.firstName+" "+this.lastName;}
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.job);
console.log(person.fullName());
//alternative way to create object
const identity={};
identity.firstName="Yonatan";
identity.lastName="Berhanu";
identity.age=21;
identity.job="Student";

console.log(identity.firstName);
console.log(identity.lastName);
console.log(identity.age);
console.log(identity.job);
