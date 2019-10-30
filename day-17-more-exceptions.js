/* eslint-disable no-throw-literal */
process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin = input_stdin + data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}

// Write your code here
class Calculator {
  power(int, exp) {
    // https://eslint.org/docs/rules/no-throw-literal
    // eslint-disable-next-line no-throw-literal
    if (int < 0 || exp < 0) {
      throw 'n and p should be non-negative';
    }
    return int ** exp;
  }
}
function main() {
  let myCalculator = new Calculator();
  let T = parseInt(readLine());
  while (T-- > 0) {
    let num = readLine().split(' ');
    try {
      let n = parseInt(num[0]);
      let p = parseInt(num[1]);
      let ans = myCalculator.power(n, p);
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }
}
