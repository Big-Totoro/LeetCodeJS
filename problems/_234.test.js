const isPalindrome = require('./_234').isPalindrome;
const ListNode = require('./_234').ListNode;

test('test11', () => {
    const root = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, null))));

    const result = isPalindrome(root);

    expect(result).toBeTruthy();
});

test('test12', () => {
    const root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1, null)))));

    const result = isPalindrome(root);

    expect(result).toBeTruthy();
});

test('test13', () => {
    const root = new ListNode(1, new ListNode(2, null));

    const result = isPalindrome(root);

    expect(result).toBeFalsy();
});