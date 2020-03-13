// interface IFriend {
//     readonly name: string,
//     sayHello(name): (name) => console.log(`Hello, ${name}`);
// }

// let friend01:IFriend = {name: "Melissa", sayHello: name};
// let friend02:IFriend = {name: "Zach", sayHello: name};
// let friend03:IFriend = {name: "Shay", sayHello: name};
// let friend04:IFriend = {name: "Jessi", sayHello: name};
// let friend05:IFriend = {name: "Uri", sayHello: name};

let OPerson1 = {
    name: 'Melissa',
    sayHello: function() { }
};

OPerson1.sayHello = function() { console.log(`Hello! My name is ${this.name}`); }
OPerson1.sayHello();

let OPerson2 = {
    name: 'Zach',
    sayHello: function() { }
};

OPerson2.sayHello = function() { console.log(`Hello! My name is ${this.name}`); }
OPerson2.sayHello();

let OPerson3 = {
    name: 'Shay',
    sayHello: function() { }
};

OPerson3.sayHello = function() { console.log(`Hello! My name is ${this.name}`); }
OPerson3.sayHello();

let OPerson4 = {
    name: 'Jessi',
    sayHello: function() { }
};

OPerson4.sayHello = function() { console.log(`Hello! My name is ${this.name}`); }
OPerson4.sayHello();

let OPerson5 = {
    name: 'Uri',
    sayHello: function() { }
};

OPerson5.sayHello = function() { console.log(`Hello! My name is ${this.name}`); }
OPerson5.sayHello();

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
        return `${this.name} is ${this.age} years old and currently resides in ${this.city}.`;
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

    constructor(manufacturer: string, numWheels: number) {
        this.manufacturer = manufacturer;
        this.wheelCount = numWheels;
    }

    aboutVehicle() {
        console.log(`This vehicle was made by ${this.manufacturer} and has ${this.wheelCount} wheels.`);
    }
}

class Truck extends Vehicle {
    hasDoors: boolean = true;
    hasBed: boolean = true;
    vehicleWheels: number = 4;

    constructor(vehicleMake: string, vehicleWheels: number, vehicleHasDoors: boolean, vehicleHasBed: boolean) {
        super(vehicleMake, vehicleWheels);
        this.hasDoors = vehicleHasDoors;
        this.hasBed = vehicleHasBed;
    }

    aboutVehicle() {
        console.log(`This truck was made by ${this.manufacturer} and has ${this.wheelCount} wheels. It ${this.hasBed ? 'has a bed' : 'has no bed'} and ${this.hasDoors ? 'has doors' : 'does not have doors'}.`);
    }
}

class Sedan extends Vehicle {
    hasDoors: boolean = true;
    hasBed: boolean = false;
    // carSize: Enumerator;
    carSize: string;
    fuelEconomy: number;
    vehicleWheels: number = 4;
    
    constructor(vehicleMake: string, vehicleWheels: number, vehicleHasDoors: boolean, vehicleHasBed: boolean, vehicleSize: string, mpg: number) {
        super(vehicleMake, vehicleWheels);
        this.hasDoors = vehicleHasDoors;
        this.hasBed = vehicleHasBed;
        this.carSize = vehicleSize;
        this.fuelEconomy = mpg;
    }
    aboutVehicle() {
        console.log(`This car was made by ${this.manufacturer} and has ${this.wheelCount} wheels. It ${this.hasBed ? 'has a bed' : 'has no bed'} and ${this.hasDoors ? 'has doors' : 'does not have doors'}. It is ${this.carSize}-sized and gets ${this.fuelEconomy} mpg.`);
    }
}

// export namespace CarSize {
//     export enum Size {
//         Subcompact,
//         Compact,
//         Small,
//         Midsize,
//         Medium,
//         Large
//     }
// }

class Motorcycle extends Vehicle {
    hasDoors: boolean = false;
    hasBed: boolean = false;
    fuelEconomy: number;
    vehicleWheels: number = 2;
    hasSteeringWheel: boolean = false;
    hasHandleBars: boolean = true;
    
    constructor(vehicleMake: string, vehicleWheels: number, vehicleHasDoors: boolean, vehicleHasBed: boolean, mpg: number, handlebars: boolean, steeringWheel: boolean) {
        super(vehicleMake, vehicleWheels);
        this.hasDoors = vehicleHasDoors;
        this.hasBed = vehicleHasBed;
        this.fuelEconomy = mpg;
        this.hasHandleBars = handlebars;
        this.hasSteeringWheel = steeringWheel;
    }

    aboutVehicle() {
        console.log(`This motorcycle was made by ${this.manufacturer} and has ${this.wheelCount} wheels. It ${this.hasBed ? 'has a bed' : 'has no bed'} and ${this.hasDoors ? 'has doors' : 'does not have doors'}. It gets ${this.fuelEconomy} mpg. It is controlled with ${this.hasHandleBars ? 'handlebars.' : this.hasSteeringWheel ? 'a steering wheel somehow on a motorcyle??' : '10% luck, 20% skill, 15% concentrated power of will.'}`);
    }
}

const parentVehicle = new Vehicle('GM', 4);
parentVehicle.aboutVehicle();

const childTruck = new Truck('Ford', 4, true, true);
childTruck.aboutVehicle();

const childSedan = new Sedan('Nissan', 4, true, false, 'Compact', 34);
childSedan.aboutVehicle();

const childMotorcycle = new Motorcycle('Honda', 2, false, false, 78, false, false);
childMotorcycle.aboutVehicle();