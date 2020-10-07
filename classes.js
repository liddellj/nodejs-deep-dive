// a class definition
class Animal {
  constructor(name) {
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  // setter
  set name(value) {
    this._name = value;
  }

  // method
  isAlive() {
    return true;
  }
}

// inheritance
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  miaow() {
    console.log("miaow");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  woof() {
    console.log("woof");
  }
}

const create = (MyClass, name) => new MyClass(name);

// like functions - class types can be passed in as function parameters
const myCat = create(Cat, "Tilly");

// instanceof allows you to check if an object is of a particular class
console.log(myCat instanceof Dog);

// default export
//export default Animal;

// in another file, default import
//import Animal from './classes';

// named exports
//export const Cat;
//export const Dog;

// named import 
//import Animal, { Cat } from './classes';

// using require()
//const Animal = require('./classes');
//const { Cat } = require('./classes');

//const myDog = create(Dog, 'Bob');

// using module.exports
//module.exports.default = Animal;
//module.exports.Cat = Cat;
//module.exports.Dog = Dog;
