const TreeNode = require('./_257').TreeNode;
const binaryTreePaths = require('./_257').binaryTreePaths;

test('test11', () => {
    const root = new TreeNode(1,
        new TreeNode(2,
            null,
            new TreeNode(5, null, null)
        ),
        new TreeNode(3,
            null,
            null)
    );

    const result = binaryTreePaths(root);

    expect(result).toStrictEqual(["1->2->5", "1->3"]);
});