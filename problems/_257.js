/**
 * Definition for a binary tree node.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
    if (root == null) {
        return [];
    }

    const result = [];

    dfs(root, "", result);

    return result;
};

function dfs(root, str, arr) {
    if (root == null) {
        return;
    }

    str += root.val;

    if (root.left == null && root.right == null) {
        arr.push(str);

        return;
    }

    str += "->";

    dfs(root.left, str, arr);
    dfs(root.right, str, arr);
}

module.exports = {binaryTreePaths, TreeNode};