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

  node_at_index(index) {
    if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let position = 0;

      while (position < index) {
        current = current.next;
        position += 1;
      }

      return current;
    }
  }

  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      size += 1;
      current = current.next;
    }
    return size;
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

console.log("\nThe list is:\n" + list.print());
// console.log("\nThe sum of the list is:\n" + list.sum_recursive());

///////////////////////////////////////////////////////////////////////////////////////////////
// Determine if a value exists in a linked list
///////////////////////////////////////////////////////////////////////////////////////////////

function node_exists_iterative(head, target) {
  let current = head;
  while (current) {
    if (current.val === target) {
      return true;
    }
    current = current.next;
  }
  return false;
}

function node_exists_recursive(head, target) {
  if (head.val === target) {
    return true;
  }

  if (!head.next) {
    return false;
  }

  return node_exists_recursive(head.next, target);
}

// console.log(
//   "\nDoes target exists in this list?\n" + node_exists_iterative(head, 44)
// );

// console.log(
//   "\nDoes target exists in this list?\n" + node_exists_recursive(head, 44)
// );

///////////////////////////////////////////////////////////////////////////////////////////////
// find the node in a linked list with a specific index
///////////////////////////////////////////////////////////////////////////////////////////////

// iterative approach
function find_at_index_iterative(index, head) {
  if (index < 0) return "Invalid index";

  let current = head;

  while (current) {
    if (index === 0) {
      return current.val;
    }
    current = current.next;
    index -= 1;
  }

  return null;
}

// recursive approach
function find_at_index_recursive(index, head) {
  if (index < 0) {
    return "Invalid index.";
  }

  if (!head) {
    return null;
  }

  if (index === 0) {
    return head.val;
  }

  return find_at_index_recursive(index - 1, head.next);
}

// console.log("\nThe node at the index is:\n" + find_at_index_iterative(5, head));
// console.log("\nThe node at the index is:\n" + find_at_index_recursive(6, head));

///////////////////////////////////////////////////////////////////////////////////////////////
// reverse a linked list
///////////////////////////////////////////////////////////////////////////////////////////////

// Iterative approach
function reverse_list_iterative(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return new List(prev);
}

// recursive approach
function reverse_list_recursive(current, prev = null) {
  if (!current) {
    return new List(prev);
  }

  const next = current.next;
  current.next = prev;
  prev = current;
  current = next;

  return reverse_list_recursive(current, prev);
}

// console.log('\nThe reversed list is:\n' + reverse_list(head).print());
console.log("\nThe reversed list is:\n" + reverse_list_recursive(head).print());

///////////////////////////////////////////////////////////////////////////////////////////////
// sort a list using merge sort
///////////////////////////////////////////////////////////////////////////////////////////////

function mergeSort(list) {
  // if linked list only has 1 or no nodes, return
  if (list.size() <= 1) {
    return list;
  }

  const mid = Math.floor(list.size() / 2); // find the mid point of the linked list
  const mid_node = list.node_at_index(mid - 1); // find the node at the mid index
  let leftList = list; // set left linked list to equal the full linked list
  let rightList = new List(); // initiate an empty linked list
  rightList.head = mid_node.next; // set the node following the mid node to be the head node of the right linked list
  // set the next_node property of the mid node to null to sever the right hand side of
  // the linked list
  mid_node.next = null;

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(left, right) {
  let sortedList = new List(new Node(0)); // add a random node as a head
  let sortedCurrent = sortedList.head; // final sorted list's current node
  let leftCurrent = left.head; // left list's current node
  let rightCurrent = right.head; // right list's current node

  while (leftCurrent || rightCurrent) {
    if (!leftCurrent) {
      sortedCurrent.next = rightCurrent;
      rightCurrent = rightCurrent.next;
    } else if (!rightCurrent) {
      sortedCurrent.next = leftCurrent;
      leftCurrent = leftCurrent.next;
    } else {
      //  while both the left and right current nodes are not nul
      if (leftCurrent.val <= rightCurrent.val) {
        // compare which node has bigger value, add the node to the final sorted list
        sortedCurrent.next = leftCurrent;
        leftCurrent = leftCurrent.next;
      } else {
        sortedCurrent.next = rightCurrent;
        rightCurrent = rightCurrent.next;
      }
    }

    sortedCurrent = sortedCurrent.next;
  }

  sortedList.head = sortedList.head.next; // removed the 0 value head and make the second node the new head

  return sortedList;
}

// console.log("\nThe sorted list is:\n" + mergeSort(list).print());
