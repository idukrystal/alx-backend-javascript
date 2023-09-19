
async function askName() {
  readline = require('readline');

  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  question = 'Welcome to Holberton School, what is your name?\n'

  answer = interface.question(question);
  
  interface.on('data', () => {
    interface.write(`Your name is: ${answer}\n`);
  })
}

askName();

process.on('exit', () => {
    process.stdout.write('This important software is now closin\n');
});
