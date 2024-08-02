// day 17 of 30 days of JS
// Data Structures
// Activity 1
// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function createLinkedList() {
//   let head = null;
//   let tail = null;
//   for (let i = 0; i < 5; i++) {
//     let newNode = new Node(i);
//     if (head === null) {
//       head = newNode;
//       tail = newNode;
//     } else {
//       tail.next = newNode;
//       tail = newNode;
//     }
//   }
//   return head;
// }
// const linkedList = createLinkedList();


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
    // toString(){
    //     return this.value;
    // }
}

// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;
// console.log(node1.toString());
// console.log(node2.toString());
// console.log(node3.toString());

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    remove(value) {
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
    display() {
        let current = this.head;
        let result = [];
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}
const link = new LinkedList();
link.append(1);
link.append(2);
link.append(3);
link.display();
link.remove(3);
link.display();


// Stack 
class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    display() {
        console.log(this.items.join(" -> "));
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
stack.pop();
stack.display();
stack.pop();
// stack.pop();
console.log(stack.isEmpty());
// Queue
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(value) {
        this.items.push(value);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    display() {
        console.log(this.items.join(" -> "));
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
console.log(queue.front());
queue.dequeue();
queue.display();
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());

// Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // toString(){
    //     return this.value;
    // }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return;
        }
        let current = this.root;
        while (current !== null) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = new TreeNode(value);
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = new TreeNode(value);
                    return;
                }
                current = current.right;
            }
        }
    }
}
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
console.log(tree.root.toString());

// Activity 2
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);

node1.left = node2;
node2.left = node3;
console.log(node1.toString());
console.log(node2.toString());
console.log(node3.toString());


// BFS Traversal
function bfs(root) {
  const queue = [];
  if (root !== null) {
    queue.push(root);
  }
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}
bfs(tree.root);

// DFS Traversal
function dfs(root) {
  const stack = [];
  if (root !== null) {
    stack.push(root);
  }
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current.value);
    if (current.left !== null) {
      stack.push(current.left);
    }
    if (current.right !== null) {
      stack.push(current.right);
    }
  }
}
dfs(tree.root);