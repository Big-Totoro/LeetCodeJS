/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
    if (nums1.length === 0 || nums2.length === 0) {
        return;
    }

    let i = m - 1;
    let j = n - 1;
    let insertIndex = m + n - 1;

    while (i >= 0 && j >= 0) {
        nums1[insertIndex--] = (nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }

    while (j >= 0) {
        nums1[insertIndex--] = nums2[j--];
    }
};

module.exports = merge;