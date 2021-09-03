const findDisappearedNumbers = require('./_448');

test('test11', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];

    expect(findDisappearedNumbers(nums)).toStrictEqual([5, 6]);
});