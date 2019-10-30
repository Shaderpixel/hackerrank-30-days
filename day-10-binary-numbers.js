

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
  const holder = [];
  function decToBin(input) {
    while (input > 0) {
      holder.unshift(input % 2);
      input = Math.floor(input / 2);
    }
  }
  decToBin(n);
  let max = 0,
    currentConsec = 0;
  holder.forEach((val, i) => {
    if (val === 1) {
      // if current value is one and first of array
      if (i === 0) {
        return currentConsec = currentConsec + 1;
      }
      // if current value is one and previous value is one
      if (holder[i - 1] === 1) {
        return currentConsec = currentConsec + 1;
      }
    } else {
      // current value is zero then check if previous value is one then end of consecutive ones and reset currentConsec else do nothing
      if (holder[i - 1] === 1) {
        if (currentConsec > max) {
          max = currentConsec;
        }
        currentConsec = 0;
      } else {
        return;
      }
    }
  });
  console.log(max);
}
