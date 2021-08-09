const containsDuplicate = require('./_217');

test('test11', () => {
    const nums = [1, 2, 3, 1];

    const result = containsDuplicate(nums);

    expect(result).toBeTruthy();
});

test('test12', () => {
    const nums = [1, 2, 3, 4];

    const result = containsDuplicate(nums);

    expect(result).toBeFalsy();
});