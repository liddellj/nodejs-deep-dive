// environment variables can be accessed via process.env
const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  // do extra debug stuff here
}

console.log(process.env.NODE_ENV || "development");

// dotenv is a popular npm library that allows you to load .env files
