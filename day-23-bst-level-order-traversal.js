// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else if (root.right) {
      this.insert(root.right, data);
    } else {
      root.right = new Node(data);
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function(root) {
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    // create queue
    let result = [],
      queue = [];
    if (root !== null) {
      queue.push(root);
    } // set up queue with root

    // while(queue.length) {
    //     const node = queue.shift();
    //     result.push(node.data);

    //     if (node.left !== null) {
    //         queue.push(node.left);
    //     }
    //     if (node.right !== null) {
    //         queue.push(node.right);
    //     }
    // }

    function getBST() {
      if (queue.length === 0) {
        return;
      }
      const [ node ] = queue.slice(0, 1); // dequeue first item in queue, slice is faster
      queue = [ ...queue.slice(1) ]; // update queue

      result.push(node.data); // process dequeued item

      if (node.left !== null) {
        // add next level items in order
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      getBST();
    }

    getBST();
    process.stdout.write(result.join(' '));
  }; // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

let _input = '';

process.stdin.on('data', (data) => {
  _input = _input + data;
});

process.stdin.on('end', () => {
  let tree = new BinarySearchTree();
  let root = null;

  let values = _input.split('\n').map(Number);

  for (let i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});
