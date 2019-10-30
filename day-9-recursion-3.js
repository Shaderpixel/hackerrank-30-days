

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString = inputString + inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the factorial function below.
function factorial(n) {
  if (n === 1) {
    return 1; // if we don't return a number and the terminate at 0, then the recursion will fail e.g. 3 * 2 * 1 * undefined === NaN
  }
  return n * factorial(--n);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = factorial(n);

  ws.write(`${result }\n`);

  ws.end();
}
