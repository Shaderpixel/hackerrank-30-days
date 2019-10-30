function processData(input) {
  const inputArr = input.split('\n');
  const inputString = inputArr.slice(1);
  const outputString = inputString.reduce((acc, str) => {
    let even = [],
      odd = [];
    [ ...str ].forEach((char, i) => {
      !(i % 2) ? even.push(char) : odd.push(char);
    });
    acc.push(`${even.join('')} ${odd.join('')}`);
    return acc;
  }, []);
  console.log(outputString.join('\n'));
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', (input) => {
  _input = _input + input;
});

process.stdin.on('end', () => {
  processData(_input);
});
