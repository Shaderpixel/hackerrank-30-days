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

// ///////////// ignore above this line ////////////////////

/*
 * You can use the following pseudocode:
 *
 * `S` = read string from stdin.
 * try {
 *     `N` = numeric value of `S`.
 *
 *     If `N` is `NaN` or `undefined`, then some exception must be thrown,
 *     you can write the following withtout using conditional statement:
 *     <condition to return true when `N` is `NaN` or `undefined`> && an_undefined_function_call()
 *
 *     print `N`
 * } catch (err) {
 *     print `Bad String`.
 * }
 */

function main() {
  const S = readLine();
  try {
    // forcing parser to throw a range error If precision is not between 1 and 100 (inclusive)
    // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
    // www.hackerrank.com/challenges/30-exceptions-string-to-integer/forum/comments/128001
    (1).toPrecision(Number(S) * 0 + 1);
    console.log(Number(S));
  } catch (err) {
    console.log('Bad String');
  }
}
