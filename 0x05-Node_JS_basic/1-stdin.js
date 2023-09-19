const readline = require('readline')

console.log("Welcome to Holberton School, what is your name?")

const myInterface  = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

myInterface.question("Your name is: ", (answe) => {
  process.exit()
})

process.on("exit", () => {
  console.log("This important software is now closing");
})
