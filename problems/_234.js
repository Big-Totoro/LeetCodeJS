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
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    if (head === null) {
       return false;
    }
    
    let length = estimateLength(head);
    const halfLength = (length % 2 === 0) ? Math.trunc(length / 2) : Math.trunc(length / 2) + 1;
    const halfHead = getHalfElement(head, halfLength);
    let reversedHead = reverse(halfHead);
    const result = compare(head, reversedHead);
    reverse(reversedHead);

    return result;
};

function compare(head, reversedHead) {
    while (reversedHead != null) {
        if (head.val !== reversedHead.val) {
            return false;
        }
        head = head.next;
        reversedHead = reversedHead.next;
    }

    return true;
}

function reverse(head) {
    let currentNode = head;
    let prevNode = null;

    while (currentNode != null) {
        let tempNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = tempNode;
    }

    return prevNode;
}

function getHalfElement(head, halfLength) {
    while (halfLength > 0) {
        head = head.next;
        --halfLength;
    }

    return head;
}

function estimateLength(head) {
    let length = 0;
    
    while (head != null) {
        ++length;
        head = head.next;
    }

    return length;
}

module.exports = { isPalindrome, ListNode };