/**
 * Definition for singly-linked list.
 */
 class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    return reverse(null, head);
};

function reverse(prev, current) {
    if (current == null) {
        return prev;
    }

    const next = current.next;
    current.next = prev;

    return reverse(current, next);
}

module.exports = { ListNode, reverseList }