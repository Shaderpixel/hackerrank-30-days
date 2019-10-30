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

function Solution() {
  // Write your code here
  let queue = [],
    stack = [];

  function pushCharacter(char) {
    stack.push(char);
  }

  function popCharacter() {
    //   console.log(stack);
    return stack.pop();
  }

  function enqueueCharacter(char) {
    queue.unshift(char);
  }

  function dequeueCharacter() {
    //   console.log(queue);
    return queue.pop();

    /**
       *  cannot be queue.shift otherwise it will compare the same character from the start of one and end of the other array. It must compare from the same array position
       * [ 'y', 'e', 's' ]
        [ 's', 'e', 'y' ]
        [ 'y', 'e' ]
        [ 'e', 'y' ]
        The word, yes, is a palindrome. Which is incorrect/
       *  */
  }

  return {
    pushCharacter: pushCharacter,
    popCharacter: popCharacter,
    enqueueCharacter: enqueueCharacter,
    dequeueCharacter: dequeueCharacter
  };
}

function main() {
  // read the string s
  let s = readLine();
  let len = s.length;
  // create the Solution class object p
  let obj = new Solution();
  // push/enqueue all the characters of string s to stack
  for (var i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  let isPalindrome = true;

  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (var i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  // finally print whether string s is palindrome or not

  if (isPalindrome) {
    console.log(`The word, ${ s }, is a palindrome.`);
  } else {
    console.log(`The word, ${ s }, is not a palindrome.`);
  }
}
