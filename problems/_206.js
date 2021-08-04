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
    let currentNode = head;
    let prevNode = null;
    while (currentNode != null) {
        let tempNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = tempNode;
    }

    return prevNode;
};

module.exports = { ListNode, reverseList }