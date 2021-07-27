const hasCycle = require('./_141').hasCycle;
const ListNode = require('./_141').ListNode;

test("test11", () => {
    const root = new ListNode(3, null);
    const node1 = new ListNode(2, null);
    const node2 = new ListNode(0, null);
    const tail = new ListNode(-4, null);

    root.next = node1;
    node1.next = node2;
    node2.next = tail;
    tail.next = node1;

    const result = hasCycle(root);
    expect(result).toBeTruthy();
});