const twoSum = require('./_1');

test("test11", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(nums, target);
    expect(result).toStrictEqual([0, 1]);
})