class Person {
    constructor(name = "Anonymous",age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi!, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.homeLocation) {
            greeting += ` I am Visiting ${this.homeLocation}`;
        }

        return greeting;
    }

    hommy() {
        if(this.homeLocation) {
            return !!this.homeLocation;
        }
    }
}
const me = new Traveler('Gabriel Adewumi',20,'Ekiti State');
console.log(me.getGreeting());
const me2 = new Traveler();
console.log(me2.getGreeting());
// console.log(me.getDescription());