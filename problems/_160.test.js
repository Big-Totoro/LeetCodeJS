const ListNode = require('./_160').ListNode;
const getIntersectionNode = require('./_160').getIntersectionNode;

test("test11", () => {
    const node11 = new ListNode(4, null);
    const node12 = new ListNode(1, null);

    const node21 = new ListNode(5, null);
    const node22 = new ListNode(6, null);
    const node23 = new ListNode(1, null);

    const node01 = new ListNode(8, new ListNode(4, new ListNode(5, null)));

    node11.next = node12;
    node12.next = node01;

    node21.next = node22;
    node22.next = node23;
    node23.next = node01;

});