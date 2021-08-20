const missingNumber = require('./_268');

test('test11', () => {
    const nums = [3, 0, 1];

    expect(missingNumber(nums)).toStrictEqual(2);
});

test('test12', () => {
    const nums = [0, 1];

    expect(missingNumber(nums)).toStrictEqual(2);
});

test('test13', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

    expect(missingNumber(nums)).toStrictEqual(8);
});