const moveZeroes = require('./_283');

test('test11', () => {
    const nums = [0, 1, 0, 3, 12]

    const result = moveZeroes(nums);

    expect(result).toStrictEqual([1, 3, 12, 0, 0]);
});

test('test12', () => {
    const nums = [0]

    const result = moveZeroes(nums);

    expect(result).toStrictEqual([0]);
});