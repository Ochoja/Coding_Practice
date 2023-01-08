/*Using the 'class' keyword to create constructors and objects*/
class Person {
    constructor(name, age) {
	this.name = name;
	this.age = age;
    }

    //no need for `function` keyword or `.prototype`
    speak(line) {
	console.log(`${this.name} says "${line}"`);
    }
}

//create person object
let person1 = new Person("Daniel", 30);

person1.speak("The earth is flat");
