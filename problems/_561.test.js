const arrayPairSum = require('./_561');

test('test11', () => {
    const nums = [1, 4, 3, 2];

    expect(arrayPairSum(nums)).toStrictEqual(4);
});

test('test12', () => {
    const nums = [6, 2, 6, 5, 1, 2];

    expect(arrayPairSum(nums)).toStrictEqual(9);
});