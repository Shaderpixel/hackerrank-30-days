

let _input = '';
let _index = 0;
process.stdin.on('data', (data) => {
  _input = _input + data;
});
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('[ \n]+'));
  main();
});
function read() {
  return _input[_index++];
}

/** ** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(`Name: ${ this.lastName }, ${ this.firstName }\nID: ${ this.idNumber}`);
  }
}

class Student extends Person {

  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() { // using arrow function as class property gives an error because it needs babel-eslint parser instead
    const average =
      this.scores.reduce((acc, score) => acc = acc + score, 0) / this.scores.length;

    if (average >= 90 && average <= 100) {
      return 'O';
    } else if (average >= 80) {
      return 'E';
    } else if (average >= 70) {
      return 'A';
    } else if (average >= 55) {
      return 'P';
    } else if (average >= 40) {
      return 'D';
    }
    return 'T';
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = Number(read());
  let numScores = Number(read());
  let testScores = new Array(numScores);

  for (let i = 0; i < numScores; i++) {
    testScores[i] = Number(read());
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log(`Grade: ${ s.calculate()}`);
}
