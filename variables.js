// we can use var, let or const when declaring a variable
var a = 0; // number
let b = 'z'; // string
const c = true; // boolean

// var is legacy - prefer let or const

// let defines a reference that can be reassigned
let thing = 2;
thing = 3;

// const defined a reference that cannot be reassigned
const otherThing = 4;
otherThing = 5; // this will throw an error at runtime

// variables are scoped to the function or module in which they are declared

const outer = false;

var myFunction = function() {
   const inner = true;

   // outer and inner are visible here
}

// only outer is visible here here

/*
In the following example, the fruit reference is shared across jim and abbi
any modifications are therefore shared
*/
let = fruit = ['apples', 'bananas'];

const jim = {
  name: 'Jim',
  lunch: fruit
};

const abbi = {
  name: 'Abbi',
  lunch: fruit
};

jim.lunch.push('oranges');

console.log(jim.lunch);
console.log(abbi.lunch);