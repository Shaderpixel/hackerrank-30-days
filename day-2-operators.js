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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  console.log(Math.round(meal_cost + meal_cost * (tip_percent / 100) + meal_cost * (tax_percent / 100)));

  /**
   * Lesson:
   * Math.floor() doesn't round up, it rounds down to the nearest int.
   * Math.ceil() function always rounds a number up to the next largest whole number or integer.
   * Math.round() rounds a number to the nearest integer
   */
}

function main() {
  const meal_cost = parseFloat(readLine());

  const tip_percent = parseInt(readLine(), 10);

  const tax_percent = parseInt(readLine(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}
