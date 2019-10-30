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
function Node(data) {
  this.data = data;
  this.next = null;
}
function Solution() {
  this.insert = function(head, data) {
    // complete this method
    if (head === null) {
      return new Node(data);
    }
    const newNode = new Node(data);

    // using recursion
    function setNext(node) {
      if (node.next === null) {
        node.next = newNode;
        // return head back up the recursion chain once base condition has been met
        return head;
      }
      setNext(node.next);
      // return head all the way back up recursion chain to calling function
      return head;
    }

    return setNext(head);
    //   return head;

    // using while loop
    //  let loop = head;
    //   while(loop) {
    //     //   console.log(loop);
    //       if (loop.next === null) {
    //         loop.next = newNode;
    //         break;
    //       } else {
    //           loop = loop.next;
    //       }
    //   }

    //   console.log('loop', loop);
    //   console.log('head', head);
    //   return head;
  };

  this.display = function(head) {
    let start = head;
    while (start) {
      process.stdout.write(`${start.data } `);
      start = start.next;
    }
  };
}
function main() {
  let T = parseInt(readLine());
  let head = null;
  let mylist = new Solution();
  for (i = 0; i < T; i++) {
    let data = parseInt(readLine());
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}
