const lengthOfLIS = require('./300');

test('test11', () => {
    const nums = [10, 9, 2, 5, 3, 7, 101, 18];

    expect(lengthOfLIS(nums)).toStrictEqual(4);
});