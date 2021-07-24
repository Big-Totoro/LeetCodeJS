const singleNumber = require('./_136');

test("test11", () => {
    const nums = [2, 2, 1];

    const result = singleNumber(nums);
    expect(result).toStrictEqual(1);
});

test("test12", () => {
    const nums = [4, 1, 2, 1, 2];

    const result = singleNumber(nums);
    expect(result).toStrictEqual(4);
});

test("test13", () => {
    const nums = [1];

    const result = singleNumber(nums);
    expect(result).toStrictEqual(1);
});