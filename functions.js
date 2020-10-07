
// standard function definition
function doOtherThings() {
  // do other things
}

// functions can also be expressed with a *function expression*:
const doThings = function() {
  // do things
}

// example of an arrow function
const done = (result) => console.log('Finished, received ' + result);

// arrow functions are a more modern, terse way of declaring functions.
// Importantly - an arrow function inherits the `this` context of the outer scope
// more on this later

// example of a callback function
const myCallback = (err, success) => {
  if (1 === 2) {
    success();
  } else {
    err();
  }
};

// callbacks can be re-written as a promise, more on this later
const asPromise = () => {
  return new Promise((resolve, reject) => {
    myCallback(reject, resolve);
  });
};


// Node JS and the associated ecosystem originally made heavy use of callbacks leading 
// to heavily indented code that was often hard to read. Promises provided a 
// more powerful pattern that is more typically used today. More on this later.

// function definitions can be passed around, and invoked later

var print = () => console.log('hello');

const invoke = func => {
  console.log("calling " + func.name + "...");
  func();
  console.log("finished calling " + func.name);
};

invoke(print);
