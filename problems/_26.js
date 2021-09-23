/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return nums;
    }

    let j = 0;

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i] !== nums[j]) {
            ++j;
            nums[j] = nums[i];
        }
    }

    return j + 1;
};

module.exports = removeDuplicates;