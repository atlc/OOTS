// interface IFriend {
//     readonly name: string,
//     sayHello(name): (name) => console.log(`Hello, ${name}`);
// }
// let friend01:IFriend = {name: "Melissa", sayHello: name};
// let friend02:IFriend = {name: "Zach", sayHello: name};
// let friend03:IFriend = {name: "Shay", sayHello: name};
// let friend04:IFriend = {name: "Jessi", sayHello: name};
// let friend05:IFriend = {name: "Uri", sayHello: name};
var Person = /** @class */ (function () {
    function Person(n, c, a) {
        this.name = n;
        this.city = c;
        this.age = a;
    }
    Person.prototype.sayHello = function () {
        return this.name + " is " + this.age + " years old and currently resides in " + this.city + ".x";
    };
    return Person;
}());
var person01 = new Person("Melissa", "Birmingham", 30);
var person02 = new Person("Melissa", "Birmingham", 31);
var person03 = new Person("Melissa", "Birmingham", 31);
var person04 = new Person("Melissa", "Birmingham", 32);
var person05 = new Person("Melissa", "Birmingham", 32);
var Vehicle = /** @class */ (function () {
    function Vehicle(m, n) {
        this.manufacturer = m;
        this.wheelCount = n;
    }
    Vehicle.prototype.aboutVehicle = function () {
        console.log('');
    };
    return Vehicle;
}());
