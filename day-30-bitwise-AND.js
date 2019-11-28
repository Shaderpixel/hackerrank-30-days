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
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const iniArray = [ ...Array(n) ].map((el, i) => i + 1);

    // - Breaks on large number of entries
    // const binaryResult = iniArray.reduce((acc, el, i) => {
    //   if (i === iniArray.length - 1) {return acc;} // ignore final item
    //   iniArray.slice(i + 1).forEach((item) => acc.push(el & item));
    //   return acc;
    // }, []);
    // process.stdout.write(`${Math.max(...binaryResult.filter((el) => el < k))}\n`);

    const binaryResult = iniArray.reduce((acc, el, i) => {
      if (i === iniArray.length - 1) {
        return acc; // ignore final item
      }
      iniArray.slice(i + 1).forEach((item) => {
        const binaryOp = el & item;
        if (binaryOp < k && binaryOp > acc) {
          acc = binaryOp;
        }
      });
      return acc;
    }, 0);
    process.stdout.write(`${binaryResult}\n`);
  }
}
