/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
    if (node === null) {
        return;
    }

    node.val = node.next.val;
    node.next = node.next.next;
};

module.exports = { deleteNode, ListNode };