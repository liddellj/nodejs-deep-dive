// destructuring provides a short-hand for creating local variables
// based on the properties of another parameter

const howOld = (person) => {
  const personName = person.name;
  const age = person.age;

  console.log(personName + " is " + age);
};

const howOld3 = (props) => {
  const { name, age } = props;

  console.log(name + " is " + age);
};

const howOld2 = ({ name: personName, age }) => {
  console.log(personName + " is " + age);
};

const person = {
  name: "jim",
  age: 38
};

howOld(person);
howOld2(person);
howOld3(person);
