const util = require("util");

const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

let list_1_node_1 = new ListNode(2);
let list_1_node_2 = new ListNode(4);
let list_1_node_3 = new ListNode(3);
// let list_1_node_4 = new ListNode(2);

list_1_node_1.next = list_1_node_2;
list_1_node_2.next = list_1_node_3;
// list_1_node_3.next = list_1_node_4;

let list_2_node_1 = new ListNode(5);
let list_2_node_2 = new ListNode(6);
let list_2_node_3 = new ListNode(4);
// let list_2_node_4 = new ListNode(1);

list_2_node_1.next = list_2_node_2;
list_2_node_2.next = list_2_node_3;
// list_2_node_3.next = list_2_node_4;

var addTwoNumbers = function (l1, l2) {
  let carryover = 0;

  let number = 0;

  let node;

  let head = new ListNode(0);

  let current = head;

  while (l1 != null || l2 != null) {
    if (l1 != null && l2 != null) {
      number = l1.val + l2.val + carryover;
      if (number >= 10) {
        number = number - 10;
        carryover = 1;
      } else {
        carryover = 0;
      }

      l1 = l1.next;
      l2 = l2.next;
    } else {
      if (l1 != null) {
        number = l1.val + carryover;
        if (number >= 10) {
          number = number - 10;
          carryover = 1;
        } else {
          carryover = 0;
        }

        l1 = l1.next;
      }

      if (l2 != null) {
        number = l2.val + carryover;
        if (number >= 10) {
          number = number - 10;
          carryover = 1;
        } else {
          carryover = 0;
        }

        l2 = l2.next;
      }
    }

    node = new ListNode(number);

    current.next = node;

    current = current.next;
  }

  if (carryover === 1) {
    node = new ListNode(carryover);
    current.next = node;
  }

  return head.next;
};

console.log(
  util.inspect(addTwoNumbers(list_1_node_1, list_2_node_1), {
    showHidden: false,
    depth: null,
    colors: true,
  })
);
