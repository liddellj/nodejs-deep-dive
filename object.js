'use strict'; // modifying a frozen object only throws in strict mode

const person = {
  name: "Jim",
  age: 36
};

// Object.keys lets you list the properties of an object
Object.keys(person).map(key => {
  console.log(`The object has key ${key} with a value of ${person[key]}`);
});

// you can freeze and Object to make it immutable
const frozen = Object.freeze(person);


try {
  frozen.name = "Bob";
} catch (err) {
  console.log(err);
}

console.log(frozen.name);
