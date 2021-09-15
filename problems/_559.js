/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (!root) {
        return 0;
    }

    let current = 0;

    for (let node of root.children) {
        current = Math.max(current, maxDepth(node));
    }

    return current + 1;
};

module.exports = maxDepth;