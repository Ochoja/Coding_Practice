/*Creating objects using the constructor function*/
//Constructor
function Robot() {
    this.name = "R2-D2";
}

//Create objects by using 'new' keyword and calling constructor
let robot1 = new Robot();
let robot2 = new Robot();

console.log(robot1)
console.log(robot2)

//Constructor with parameters
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("Daniel", 5000);
let person2 = new Person("John", 22);

console.log("-----------------------");
console.log(person1);
console.log(person2);

console.log("-----------------------");
console.log("Person 1 and 2 are two unique objects");
console.log(`Person 1 Name: ${person1.name}`);
console.log(`Person 2 Name: ${person2.name}`);

//adding methods and properties to constructors
Robot.prototype.speak = function(line) {
    console.log(`${this.name} says ${line}`);
}

console.log("-----------------------");
robot1.speak("Hello");
robot2.speak("What's up");
