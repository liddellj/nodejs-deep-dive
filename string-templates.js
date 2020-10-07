const person = {
  name: 'Jim',
  age: 38
};

// string templates provide a terse way to substitute variables within a template string
console.log(`Hello ${person.name}, you are ${person.age} years old`);

// you can also evaluate expressions within a template
console.log(`${person.name === "Jim" ? "the dude" : "rando"} is ${person.age}`);

// tagged template functions are commonly used by CSS-in-JS libraries
const myTaggedTemplateFunc = (strings, exp1, exp2, exp3) => {
  console.log(...strings, exp1, exp2, exp3);
};

myTaggedTemplateFunc`first ${"second"} third ${"fourth"}`;
