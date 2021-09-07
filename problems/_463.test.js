const islandPerimeter = require('./_463');

test('test11', () => {
    const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

    expect(islandPerimeter(grid)).toStrictEqual(16);
});