

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

function main() {
  const N = parseInt(readLine(), 10);
  const isEven = !(N % 2);
  console.log(!isEven || N >= 6 && N <= 20 ? 'Weird' : 'Not Weird');
}
