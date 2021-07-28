const ListNode = require('./_142').ListNode;
const detectCycle = require('./_142').detectCycle;

test("test11", () => {
    const root = new ListNode(3, null);
    const node1 = new ListNode(2, null);
    const node2 = new ListNode(0, null);
    const tail = new ListNode(-4, null);

    root.next = node1;
    node1.next = node2;
    node2.next = tail;
    tail.next = node1;

    const result = detectCycle(root);
    expect(result).toStrictEqual(node1);
});