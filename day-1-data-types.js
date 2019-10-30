process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split("\n");
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  let i = 4;
  let d = 4.0;
  let s = 'HackerRank ';
  // Declare second integer, double, and String variables.
  let a = null,
    b = null,
    c = '';
  // Read and save an integer, double, and String to your variables.
  [ a, b, c ] = [ ...input_stdin_array ];
  // console.log(typeof parseFloat(b));
  // Print the sum of both integer variables on a new line.
  console.log(i + parseInt(a));
  // Print the sum of the double variables on a new line.
  console.log((d + parseFloat(b)).toFixed(1));
  // Concatenate and print the String variables on a new line
  console.log(s + c);
  // The 's' variable above should be printed first.
}
