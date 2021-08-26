/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const set = new Set(nums1);
    const result = [];
    for (let i = 0; i < nums2.length; ++i) {
        if (set.has(nums2[i])) {
            set.delete(nums2[i]);
            result.push(nums2[i]);
        }
    }

    return result;
};

module.exports = intersection;