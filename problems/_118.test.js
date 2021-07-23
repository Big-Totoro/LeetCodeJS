const generate = require('./_118');

test("test11", () => {
    const numRows = 5;

    const result = generate(numRows);
    expect(result).toStrictEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
});

test("test12", () => {
    const numRows = 1;

    const result = generate(numRows);
    expect(result).toStrictEqual([[1]]);
});

test("test13", () => {
    const numRows = 2;

    const result = generate(numRows);
    expect(result).toStrictEqual([[1], [1, 1]]);
});