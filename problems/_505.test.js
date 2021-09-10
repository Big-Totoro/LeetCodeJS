const shortestDistance = require('./_505');

test('test11', () => {
    const maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], start = [0, 4],
        destination = [4, 4];

    expect(shortestDistance(maze, start, destination)).toStrictEqual(12);
});