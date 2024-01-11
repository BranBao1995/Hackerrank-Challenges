class Node {
  constructor(data) {
    this.data = data;
    this.next_node = null;
  }
}

class List {
  constructor(head = null) {
    this.head = head;
  }

  // find target node given an index
  node_at_index(index) {
    if (index === 0) {
      return this.head;
    } else {
      let current = this.head;
      let position = 0;

      while (position < index) {
        current = current.next_node;
        position += 1;
      }

      return current;
    }
  }

  listLength() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.next_node;
    }

    return count;
  }

  printList() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.data);
      current = current.next_node;
    }

    return list.join("->");
  }
}

const head = new Node(5);
const list = new List(head);

// Add more nodes to the linked list
let current_node = list.head;
for (let i = 0; i < 20; i++) {
  current_node.next_node = new Node(Math.floor(Math.random() * 99));
  current_node = current_node.next_node;
}

function mergeSort(list) {
  // if linked list only has 1 or no nodes, return
  if (list.listLength() <= 1) {
    return list;
  }

  const mid = Math.floor(list.listLength() / 2); // find the mid point of the linked list
  const mid_node = list.node_at_index(mid - 1); // find the node at the mid index
  let leftList = list; // set left linked list to equal the full linked list
  let rightList = new List(); // initiate an empty linked list
  rightList.head = mid_node.next_node; // set the node following the mid node to be the head node of the right linked list
  // set the next_node property of the mid node to null to sever the right hand side of
  // the linked list
  mid_node.next_node = null;

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(left, right) {
  let sortedList = new List(new Node(0)); // add a random node as a head
  let sortedCurrent = sortedList.head; // final sorted list's current node
  let leftCurrent = left.head; // left list's current node
  let rightCurrent = right.head; // right list's current node

  while (leftCurrent || rightCurrent) {
    if (!leftCurrent) {
      sortedCurrent.next_node = rightCurrent;
      rightCurrent = rightCurrent.next_node;
    } else if (!rightCurrent) {
      sortedCurrent.next_node = leftCurrent;
      leftCurrent = leftCurrent.next_node;
    } else {
      //  while both the left and right current nodes are not nul
      if (leftCurrent.data <= rightCurrent.data) {
        // compare which node has bigger value, add the node to the final sorted list
        sortedCurrent.next_node = leftCurrent;
        leftCurrent = leftCurrent.next_node;
      } else {
        sortedCurrent.next_node = rightCurrent;
        rightCurrent = rightCurrent.next_node;
      }
    }

    sortedCurrent = sortedCurrent.next_node;
  }

  sortedList.head = sortedList.head.next_node; // removed the 0 value head and make the second node the new head

  return sortedList;
}

// console.log("\nSorted List: \n" + mergeSort(list).printList());
