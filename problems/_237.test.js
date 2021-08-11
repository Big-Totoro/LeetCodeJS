const deleteNode = require('./_237').deleteNode;
const ListNode = require('./_237').ListNode;

test('test11', () => {
    const root = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(9, null))));
    const node = 1;

    deleteNode(root.next.next);

    expect(root.val).toStrictEqual(4);
    expect(root.next.val).toStrictEqual(5);
    expect(root.next.next.val).toStrictEqual(9);
});