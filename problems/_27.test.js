const removeElement = require('./_27');

test("test11", () => {
    const nums = [3, 2, 2, 3];
    const value = 3;

    const result = removeElement(nums, value);
    expect(result).toStrictEqual(2);
    expect(nums).toStrictEqual([2, 2, 3, 3]);
})
