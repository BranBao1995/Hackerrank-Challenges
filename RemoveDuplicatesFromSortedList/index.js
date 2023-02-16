function LinkedList(head) {
  this.head = head === undefined ? null : head;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node_1 = new ListNode(1);
let node_2 = new ListNode(1);
let node_3 = new ListNode(2);
let node_4 = new ListNode(3);
let node_5 = new ListNode(3);
let node_6 = new ListNode(5);
let node_7 = new ListNode(5);

node_1.next = node_2;
node_2.next = node_3;
node_3.next = node_4;
node_4.next = node_5;
node_5.next = node_6;
node_6.next = node_7;

let linkedList = new LinkedList(node_1);

var deleteDuplicates = function (head) {
  let current = head;

  while (current != null && current.next != null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

deleteDuplicates(node_1);
