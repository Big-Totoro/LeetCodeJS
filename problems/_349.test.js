const intersection = require('./_349');

test('test1', () => {
    const nums1 = [1, 2, 2, 1], nums2 = [2, 2];

    expect(intersection(nums1, nums2)).toStrictEqual([2]);
});