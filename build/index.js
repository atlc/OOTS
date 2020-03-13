/* Object Literals, Pseudo Classes and methods */
// This is just me messing around with interfaces and pseudo-classes;
//   feel free to jump down about 30 lines to the object literals
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Friend = /** @class */ (function () {
    function Friend(name) {
        this.name = name;
    }
    Friend.prototype.sayHello = function () {
        return console.log("Hello! My name is " + this.name + ", of the interface-templated class.");
    };
    return Friend;
}());
var friend01 = new Friend('Melissa');
friend01.sayHello();
var friend02 = new Friend('Zach');
friend02.sayHello();
var friend03 = new Friend('Shay');
friend03.sayHello();
var friend04 = new Friend('Jessi');
friend04.sayHello();
var friend05 = new Friend('Uri');
friend05.sayHello();
/* Object Literals, Pseudo Classes and methods */
// These are written as just regular object literals (in Typescript)
var OPerson1 = {
    name: 'Melissa',
    sayHello: function () { }
};
OPerson1.sayHello = function () { console.log("Hello! My name is " + this.name + ", as an object literal."); };
OPerson1.sayHello();
var OPerson2 = {
    name: 'Zach',
    sayHello: function () { }
};
OPerson2.sayHello = function () { console.log("Hello! My name is " + this.name + ", as an object literal."); };
OPerson2.sayHello();
var OPerson3 = {
    name: 'Shay',
    sayHello: function () { }
};
OPerson3.sayHello = function () { console.log("Hello! My name is " + this.name + ", as an object literal."); };
OPerson3.sayHello();
var OPerson4 = {
    name: 'Jessi',
    sayHello: function () { }
};
OPerson4.sayHello = function () { console.log("Hello! My name is " + this.name + ", as an object literal."); };
OPerson4.sayHello();
var OPerson5 = {
    name: 'Uri',
    sayHello: function () { }
};
OPerson5.sayHello = function () { console.log("Hello! My name is " + this.name + ", as an object literal."); };
OPerson5.sayHello();
/* Object Literals, Pseudo Classes and methods */
// These are written as just pseudo-classes
var Person = /** @class */ (function () {
    function Person(n, c, a) {
        this.name = n;
        this.city = c;
        this.age = a;
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + " is " + this.age + " years old and currently resides in " + this.city + ".");
    };
    return Person;
}());
var person01 = new Person('Melissa', 'Birmingham', 30);
person01.sayHello();
var person02 = new Person('Zach', 'Birmingham', 31);
person02.sayHello();
var person03 = new Person('Shay', 'Birmingham', 31);
person03.sayHello();
var person04 = new Person('Jessi', 'Birmingham', 32);
person04.sayHello();
var person05 = new Person('Uri', 'Birmingham', 32);
person05.sayHello();
/* INHERITANCE */
var Vehicle = /** @class */ (function () {
    function Vehicle(manufacturer, numWheels) {
        this.manufacturer = manufacturer;
        this.wheelCount = numWheels;
    }
    Vehicle.prototype.aboutVehicle = function () {
        console.log("This vehicle was made by " + this.manufacturer + " and has " + this.wheelCount + " wheels.");
    };
    return Vehicle;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(vehicleMake, vehicleWheels, vehicleHasDoors, vehicleHasBed) {
        var _this = _super.call(this, vehicleMake, vehicleWheels) || this;
        _this.hasDoors = true;
        _this.hasBed = true;
        _this.vehicleWheels = 4;
        _this.hasDoors = vehicleHasDoors;
        _this.hasBed = vehicleHasBed;
        return _this;
    }
    Truck.prototype.aboutVehicle = function () {
        console.log("This truck was made by " + this.manufacturer + " and has " + this.wheelCount + " wheels. It " + (this.hasBed ? 'has a bed' : 'has no bed') + " and " + (this.hasDoors ? 'has doors' : 'does not have doors') + ".");
    };
    return Truck;
}(Vehicle));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(vehicleMake, vehicleWheels, vehicleHasDoors, vehicleHasBed, vehicleSize, mpg) {
        var _this = _super.call(this, vehicleMake, vehicleWheels) || this;
        _this.hasDoors = true;
        _this.hasBed = false;
        _this.vehicleWheels = 4;
        _this.hasDoors = vehicleHasDoors;
        _this.hasBed = vehicleHasBed;
        _this.carSize = vehicleSize;
        _this.fuelEconomy = mpg;
        return _this;
    }
    Sedan.prototype.aboutVehicle = function () {
        console.log("This car was made by " + this.manufacturer + " and has " + this.wheelCount + " wheels. It " + (this.hasBed ? 'has a bed' : 'has no bed') + " and " + (this.hasDoors ? 'has doors' : 'does not have doors') + ". It is " + this.carSize + "-sized and gets " + this.fuelEconomy + " mpg.");
    };
    return Sedan;
}(Vehicle));
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
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(vehicleMake, vehicleWheels, vehicleHasDoors, vehicleHasBed, mpg, handlebars, steeringWheel) {
        var _this = _super.call(this, vehicleMake, vehicleWheels) || this;
        _this.hasDoors = false;
        _this.hasBed = false;
        _this.vehicleWheels = 2;
        _this.hasSteeringWheel = false;
        _this.hasHandleBars = true;
        _this.hasDoors = vehicleHasDoors;
        _this.hasBed = vehicleHasBed;
        _this.fuelEconomy = mpg;
        _this.hasHandleBars = handlebars;
        _this.hasSteeringWheel = steeringWheel;
        return _this;
    }
    Motorcycle.prototype.aboutVehicle = function () {
        console.log("This motorcycle was made by " + this.manufacturer + " and has " + this.wheelCount + " wheels. It " + (this.hasBed ? 'has a bed' : 'has no bed') + " and " + (this.hasDoors ? 'has doors' : 'does not have doors') + ". It gets " + this.fuelEconomy + " mpg. It is controlled with " + (this.hasHandleBars ? 'handlebars.' : this.hasSteeringWheel ? 'a steering wheel somehow on a motorcyle??' : '10% luck, 20% skill, 15% concentrated power of will.'));
    };
    return Motorcycle;
}(Vehicle));
var parentVehicle = new Vehicle('GM', 4);
parentVehicle.aboutVehicle();
var childTruck = new Truck('Ford', 4, true, true);
childTruck.aboutVehicle();
var childSedan = new Sedan('Nissan', 4, true, false, 'Compact', 34);
childSedan.aboutVehicle();
var childMotorcycle = new Motorcycle('Honda', 2, false, false, 78, true, false);
childMotorcycle.aboutVehicle();
