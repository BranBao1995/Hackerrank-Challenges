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
console.log(list.printList());

let current_node = list.head;
for (let i = 0; i < 20; i++) {
  current_node.next_node = new Node(Math.floor(Math.random() * 99));
  current_node = current_node.next_node;
}

console.log("List:\n" + list.printList());
console.log("\nList Length: " + list.listLength());

function mergeSort(list) {
  if (list.listLength() <= 1) {
    return list;
  }

  const mid = Math.floor(list.listLength() / 2);
  const mid_node = list.node_at_index(mid - 1);
  let leftList = list;
  let rightList = new List();
  rightList.head = mid_node.next_node;
  mid_node.next_node = null;

  //   console.log("\nLeft List:\n" + leftList.printList());

  //   console.log("\nRight List:\n" + rightList.printList());

  return merge(mergeSort(leftList), mergeSort(rightList));
}

function merge(left, right) {
  let sortedList = new List(new Node(0));
  let sortedCurrent = sortedList.head;
  let leftCurrent = left.head;
  let rightCurrent = right.head;

  while (leftCurrent && rightCurrent) {
    if (leftCurrent.data <= rightCurrent.data) {
      sortedCurrent.next_node = leftCurrent;
      sortedCurrent = sortedCurrent.next_node;
      leftCurrent = leftCurrent.next_node;
    } else {
      sortedCurrent.next_node = rightCurrent;
      sortedCurrent = sortedCurrent.next_node;
      rightCurrent = rightCurrent.next_node;
    }
  }

  while (leftCurrent) {
    sortedCurrent.next_node = leftCurrent;
    sortedCurrent = sortedCurrent.next_node;
    leftCurrent = leftCurrent.next_node;
  }

  while (rightCurrent) {
    sortedCurrent.next_node = rightCurrent;
    sortedCurrent = sortedCurrent.next_node;
    rightCurrent = rightCurrent.next_node;
  }

  sortedList.head = sortedList.head.next_node;

  return sortedList;
}

console.log("\nSorted List: \n" + mergeSort(list).printList());
