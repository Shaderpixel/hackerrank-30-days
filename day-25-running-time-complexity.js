function processData(input) {
  // Enter your code here
  const [ testCases, ...options ] = [ ...input.split('\n') ];

  function isPrime(n) {
    const num = Number(n);
    if (num === 1) {
      return false;
    }
    if ([ ...n ].reduce((acc, el) => acc + el) % 3 === 0) {
      return false;
    } // if sum of digits is a multiple of 3 then its not a prime
    if (num > 5 && [ ...n ].pop() === 5) {
      return false;
    } // if last digit is a 5 then not a prime (composite)
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  process.stdout.write(options.map((n) => isPrime(n) ? 'Prime' : 'Not prime').join('\n'));
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

// Note to self, convert array items to number type [].map(Number);
