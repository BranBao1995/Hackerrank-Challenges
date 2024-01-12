// Find the sum of all nodes in a linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  constructor(head = null) {
    this.head = head;
  }

  add(number) {
    let current = this.head;
    let index = 0;
    while (index < number) {
      current.next = new Node(Math.floor(Math.random() * 50 + 1));
      current = current.next;
      index += 1;
    }
  }

  // find the sum with an iterative approach
  sum_iterative() {
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum;
  }

  // find the sum with a recursive approach
  sum_recursive(head = this.head) {
    if (!head.next) {
      return head.val;
    }

    return head.val + this.sum_recursive(head.next);
  }

  print() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.val);
      current = current.next;
    }

    return list.join("->");
  }
}

// create a head node, initialize the list, add 9 more nodes
const head = new Node(1);
const list = new List(head);
list.add(9);

console.log("The list is:\n" + list.print());
console.log("\nThe sum of the list is: " + list.sum_recursive());
