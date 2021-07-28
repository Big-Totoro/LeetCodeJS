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
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
    if (head === null || head === undefined) {
        return null;
    }

    let slow = head;
    let fast = head;
    let hasCycle = false;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            hasCycle = true;
            break;
        }
    }

    if (hasCycle) {
        fast = head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
    } else {
        return null;
    }

    return fast;
};

module.exports = {
    ListNode: ListNode,
    detectCycle: detectCycle
};