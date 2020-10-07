// rest arguments perform the reverse of spread arguments - converting an unbounded array of function arguments into an array
const myFunc = (...names) => {
  console.log(`The first name is ${names[0]}`);
  console.log(`The last name is ${names[names.length - 1]}`);
};

myFunc("Jim", "Henry", "William");

// you can also use the rest syntax to destructure 'everything else':
const props = {
  a: 1,
  b: true,
  c: 'hello'
};

const { a, ...others } = props;

console.log(others);
