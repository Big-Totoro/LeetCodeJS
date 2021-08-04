const ListNode = require('./_206').ListNode;
const reverseList = require('./_206').reverseList;

test('test11', () => {
    const root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));

    const result = reverseList(root);

    expect(result.val).toStrictEqual(5);
    expect(result.next.val).toStrictEqual(4);
    expect(result.next.next.val).toStrictEqual(3);
    expect(result.next.next.next.val).toStrictEqual(2);
    expect(result.next.next.next.next.val).toStrictEqual(1);
});