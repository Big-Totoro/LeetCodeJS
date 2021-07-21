const maxArea = require('./_11');

test("test11", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    const result = maxArea(height);
    expect(result).toStrictEqual(49);
})

test("test12", () => {
    const height = [1, 1];

    const result = maxArea(height);
    expect(result).toStrictEqual(1);
})

test("test13", () => {
    const height = [4, 3, 2, 1, 4];

    const result = maxArea(height);
    expect(result).toStrictEqual(16);
})

test("test14", () => {
    const height = [1, 2, 1];

    const result = maxArea(height);
    expect(result).toStrictEqual(2);
})
