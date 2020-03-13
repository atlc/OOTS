// interface IFriend {
//     readonly name: string,
//     sayHello(name): (name) => console.log(`Hello, ${name}`);
// }
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
// let friend01:IFriend = {name: "Melissa", sayHello: name};
// let friend02:IFriend = {name: "Zach", sayHello: name};
// let friend03:IFriend = {name: "Shay", sayHello: name};
// let friend04:IFriend = {name: "Jessi", sayHello: name};
// let friend05:IFriend = {name: "Uri", sayHello: name};
var OPerson1 = {
    name: 'Melissa',
    sayHello: function () { }
};
OPerson1.sayHello = function () { console.log("Hello! My name is " + this.name); };
OPerson1.sayHello();
var OPerson2 = {
    name: 'Zach',
    sayHello: function () { }
};
OPerson2.sayHello = function () { console.log("Hello! My name is " + this.name); };
OPerson2.sayHello();
var OPerson3 = {
    name: 'Shay',
    sayHello: function () { }
};
OPerson3.sayHello = function () { console.log("Hello! My name is " + this.name); };
OPerson3.sayHello();
var OPerson4 = {
    name: 'Jessi',
    sayHello: function () { }
};
OPerson4.sayHello = function () { console.log("Hello! My name is " + this.name); };
OPerson4.sayHello();
var OPerson5 = {
    name: 'Uri',
    sayHello: function () { }
};
OPerson5.sayHello = function () { console.log("Hello! My name is " + this.name); };
OPerson5.sayHello();
var Person = /** @class */ (function () {
    function Person(n, c, a) {
        this.name = n;
        this.city = c;
        this.age = a;
    }
    Person.prototype.sayHello = function () {
        return this.name + " is " + this.age + " years old and currently resides in " + this.city + ".";
    };
    return Person;
}());
var person01 = new Person("Melissa", "Birmingham", 30);
var person02 = new Person("Melissa", "Birmingham", 31);
var person03 = new Person("Melissa", "Birmingham", 31);
var person04 = new Person("Melissa", "Birmingham", 32);
var person05 = new Person("Melissa", "Birmingham", 32);
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
var childMotorcycle = new Motorcycle('Honda', 2, false, false, 78, false, false);
childMotorcycle.aboutVehicle();
