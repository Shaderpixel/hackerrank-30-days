function processData(input) {
  const oriInput = input.split('\n');
  const [ entries ] = oriInput.slice(0, 1);
  const dict = oriInput.slice(1, parseInt(entries) + 1).reduce((acc, entry) => {
    const [ name, number ] = entry.split(' ');
    acc[name] = number;
    return acc;
  }, {});
  const queries = oriInput.slice(parseInt(entries) + 1);
  queries.forEach((query) => {
    if (!dict[query]) {
      console.log('Not found');
    } else {
      console.log(`${query}=${dict[query]}`);
    }
  });
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
