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
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    // const temp = arr[i];
    // arr[i] = arr[arr.length - 1 - i];
    // arr[arr.length - 1 - i] = temp;
    [ arr[i], arr[arr.length - 1 - i] ] = [ arr[arr.length - 1 - i], arr[i] ];
  }

  console.log(arr.join(' '));
}
