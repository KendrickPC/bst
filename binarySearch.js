class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  find(sought) {
    let currentNode = this;
    while(currentNode) {
      // Let's take a look at each node we're visiting
      console.log("Visting: ", currentNode.val);
      if (currentNode.val === sought) return currentNode;
      if (currentNode.val > sought) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

// Creating Binary Search Tree Class
// All we need is that root top most node
class BinarySearchTree {
  constructor(root=null) {
    this.root = root;
  }
}


// Making all of my nodes first here.
const E = new Node('E')
const A = new Node('A')
const B = new Node('B')
const C = new Node('C')
const D = new Node('D')
const F = new Node('F')
const G = new Node('G')

// Connecting the nodes here:
E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

// Making this a tree now
const tree = new BinarySearchTree(E);
console.log(E.find('A')); // Node { val: 'A', left: null, right: null }
console.log(E.find('J')); // Undefined