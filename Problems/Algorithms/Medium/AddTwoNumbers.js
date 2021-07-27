/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  res = new ListNode();

  function helper(node1, node2, valBefore) {
    if (node1.next !== null || node2.next !== null) {
      helper(node1.next, node2);
    }

    if (node2.next !== null) {
      helper(node1, node2.next);
    }
  }
};
