// the spread operator gives us a nice way of merging objects together

const style = {
  color: "blue",
  width: 30,
  height: 10,
  marginLeft: 8
};

const myStyle = {
  ...style, // note the order is important here - try moving this line *after* the color property
  color: "red",
};

console.log(myStyle);

// you can also spread array items
const fruit = ['apple', 'banana', 'orange'];
const veg = ['leek', 'potatoe'];
const healthy = [...fruit, 'leek', 'apple'];

console.log(healthy);

// and you can spread function arguments

const args = ["red", "blue", 1, 2];

const myFunc = (colour1, colour2, num1, num2) => {
  console.log(colour1, colour2, num1, num2);
}

myFunc(args[0], args[1], args[2], args[3]);
myFunc(...args);
