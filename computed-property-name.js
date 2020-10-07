// you can compute the name of a property at runtime:
const thing = {
  ["name" + 1]: "Jim"
};

console.log(Object.keys(thing));
