const numIslands = require('./_200');

test('test11', () => {
    const grid = [
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
    ];

    const result = numIslands(grid);

    expect(result).toStrictEqual(1);
});

test('test12', () => {
    const grid = [
        ["1","1","0","0","0"],
        ["1","1","0","0","0"],
        ["0","0","1","0","0"],
        ["0","0","0","1","1"]
    ];

    const result = numIslands(grid);

    expect(result).toStrictEqual(3);
});