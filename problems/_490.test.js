const hasPath = require('./_490');

test('test11', () => {
    const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]],
        start = [0, 4],
        destination = [4, 4];

    expect(hasPath(maze, start, destination)).toBeTruthy();
});

test('test12', () => {
    const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]],
        start = [0, 4],
        destination = [3, 2];

    expect(hasPath(maze, start, destination)).toBeFalsy();
});