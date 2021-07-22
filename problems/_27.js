/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let i = 0;
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] !== val) {
            nums[i++] = nums[j];
        }
    }

    return i;
};

module.exports = removeElement;