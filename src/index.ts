// interface IFriend {
//     readonly name: string,
//     sayHello(name): (name) => console.log(`Hello, ${name}`);
// }

// let friend01:IFriend = {name: "Melissa", sayHello: name};
// let friend02:IFriend = {name: "Zach", sayHello: name};
// let friend03:IFriend = {name: "Shay", sayHello: name};
// let friend04:IFriend = {name: "Jessi", sayHello: name};
// let friend05:IFriend = {name: "Uri", sayHello: name};


class Person {
    name: string;
    city: string;
    age: number;

    constructor(n: string, c: string, a: number) {
        this.name = n;
        this.city = c;
        this.age = a;
    }

    sayHello() {
        return `${this.name} is ${this.age} years old and currently resides in ${this.city}.x`;
    }
}

let person01 = new Person("Melissa", "Birmingham", 30);
let person02 = new Person("Melissa", "Birmingham", 31);
let person03 = new Person("Melissa", "Birmingham", 31);
let person04 = new Person("Melissa", "Birmingham", 32);
let person05 = new Person("Melissa", "Birmingham", 32);

class Vehicle {
    manufacturer: string;
    wheelCount: number;
    hasDoors: boolean;
    hasReverse: boolean;

    constructor(m: string, n: number) {
        this.manufacturer = m;
        this.wheelCount = n;
    }

    aboutVehicle() {
        console.log('');
    }
}