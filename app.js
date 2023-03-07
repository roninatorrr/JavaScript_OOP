console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        let foundIndex = this.hobbies.indexOf(hobby);
        let valuesBefore = this.hobbies.slice(0, foundIndex);
        let valuesAfter = this.hobbies.slice(foundIndex + 1);
        this.hobbies = valuesBefore.concat(valuesAfter);
        }

    greeting() {
        console.log("Fool of a Took!");
    }

    info() {

    }
}



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation) {
        super(name, pets, residence, hobbies);

        this.occupation = occupation;
    }

    greeting() {
        console.log("The last pages are for you, Sam");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let person = new Person("Casey", 2, "Seattle", ["ceramics", "biking", "drawing", "snowboarding"]);

person.addHobby("cooking");

console.log(person);

person.removeHobby("drawing");

console.log(person);

person.greeting();

let coder = new Coder("Roni", 0, "Seattle", ["dancing", "guitar", "longboarding", "rock climbing"], "Full Stack Web Developer");

console.log(coder);

coder.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this.result;
    }

    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }

    divide(a, b) {
        this.result = a / b;
        return this.result;
    }

    display() {
        console.log(this.result);
    }
 
 }

 let calc = new Calculator();

 calc.add(2, 2);
 calc.display();
 calc.subtract(7, 4);
 calc.display();
 calc.multiply(2, 1);
 calc.display();
 calc.divide(5, 5);
 calc.display();
