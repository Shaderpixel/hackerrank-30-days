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
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  // console.log(arr);
  const hourglassWidth = 3;
  const offset = hourglassWidth - 1;
  let max = null,
    temp = null,
    outerArrayLength = arr.length; // max and temp cannot be zero because total value can be negative
  arr.forEach((innerArray, i) => {
    // we can't create any more hourglasses once it hits the fourth row
    if (i > outerArrayLength - 1 - offset) {
      return;
    }
    const innerArrayLength = innerArray.length;
    innerArray.forEach((val, j) => {
      // we can't create any more hourglasses once it hits the fourth row
      if (j > innerArrayLength - 1 - offset) {
        return;
      }
      temp =
        innerArray[j] + // current row current col
        innerArray[j + 1] + // current row current col + 1
        innerArray[j + 2] + // current row current col + 2
        arr[i + 1][j + 1] + // current row + 1 current col + 1
        arr[i + 2][j] + // current row + 2 current col
        arr[i + 2][j + 1] + // current row + 2 current col + 1
        arr[i + 2][j + 2]; // current row + 2 current col + 2
      // console.log('temp: ' + temp);
      // console.log('prior max: ' + max);
      // console.log('temp > max: ' + (temp > max));
      if (max === null) { // cannot check for !max because max can be 0
        // if max has not been set
        max = temp;
        return;
      }
      if (temp > max) {
        max = temp;
      }
    });
  });
  console.log(max);
}

/**
 * Test case:
-1 1 -1 0 0 0
0 -1 0 0 0 0
-1 -1 -1 0 0 0
0 -9 2 -4 -4 0
-7 0 0 -2 0 0
0 0 -1 -2 -4 0
 * Output: 0
 */

/**
  * Test case:
-1 -1 0 -9 -2 -2
-2 -1 -6 -8 -2 -5
-1 -1 -1 -2 -3 -4
-1 -9 -2 -4 -4 -5
-7 -3 -3 -2 -9 -9
-1 -3 -1 -2 -4 -5
  * Output: -6
  */
