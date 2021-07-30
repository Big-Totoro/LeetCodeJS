/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    const set = new Set();
    let node = headA;
    while (node != null) {
        set.add(node);
        node = node.next;
    }

    node = headB;
    while (node != null) {
        if (set.has(node)) {
            return node;
        }

        node = node.next;
    }

    return null;
};

module.exports = {
    ListNode,
    getIntersectionNode
};