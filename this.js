// what is 'this'?
/*
  way of referring to the current scope
*/

// this is the global scope
this.a = 'global scope';

console.log(this.a);

const myFunc = function () {
  // in here, scope is local to the function
  console.log('myFunc', this.a);

  const my2ndFunc = () => {
    // arrow functions inherit the scope of their parent
    console.log('my2ndFunc', this.a);
  }

  my2ndFunc();
};

const context = {
  a: 'blah'
};

// you can set the 'this' context for a function explicitly with bind
myFunc.bind(context)();

myFunc();