const list1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 5,
        next: {
          val: 8,
          next: null,
        },
      },
    },
  },
};

const list2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 6,
        next: {
          val: 7,
          next: null,
        },
      },
    },
  },
};

var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

console.log(mergeTwoLists(list1, list2));
