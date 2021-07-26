const twoSum = require('./_167');

test("test11", () => {
    const numbers = [2, 7, 11, 16];
    const target = 9;

    const result = twoSum(numbers, target);
    expect(result).toStrictEqual([1, 2]);
});