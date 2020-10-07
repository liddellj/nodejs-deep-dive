// libraries such as node-fetch provide a *promise based* API
const fetch = require("node-fetch");

// promises have a fluent (chainable) API that can be used like this:
fetch("https://catfact.ninja/fact")
  .then((response) => {
    console.log(response.status);

    return response;
  })
  .catch(err => console.error("Oh noes!"));

// you can also consume promise APIs using the async and await keywords:
const getCatFact = async () => {
  try {
    var response = await fetch("https://catfact.ninja/fact");
    var json = await response.json();
    console.log(json.fact);
  } catch (err) {
    console.log("oh noes!!!");
  }
};

getCatFact();

// Callback APIs can be wrapped as a promise like this:
const fs = require("fs");

(async () => {
  const readFileAsync = (filename) =>
    new Promise(function (resolve, reject) {
      fs.readFile(filename, function (err, data) {
        if (err) reject(err);
        else resolve(data);
      });
    });

  const contents = await readFileAsync("./functions.js");

  console.log(contents);
})();
