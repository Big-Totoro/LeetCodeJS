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
 * @return {boolean}
 */
const hasCycle = function (head) {
    if (head === null || head === undefined) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
};

module.exports = {
    ListNode: ListNode,
    hasCycle: hasCycle
};