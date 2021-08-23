/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let p = 0;
    let counter = 0;

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] != 0) {
            nums[p++] = nums[i];
        } else {
            ++counter;
        }
    }

    for (let i = p; i < nums.length; ++i) {
        nums[i] = 0;
    }
};

module.exports = moveZeroes;