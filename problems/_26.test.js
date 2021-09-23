const removeDuplicates = require('./_26');

test("test11", () => {
    const nums = [1, 1, 2];

    expect(removeDuplicates(nums)).toStrictEqual(2);
});