const findShortestWay = require('./_499');

test('test11', () => {
    const maze = [[0, 0, 0, 0, 0], [1, 1, 0, 0, 1], [0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 0]], start = [4, 3],
        destination = [0, 1];

    expect(findShortestWay(maze, start, destination)).toStrictEqual('lul');
});