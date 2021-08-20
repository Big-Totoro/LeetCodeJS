/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    const sum1 = nums.reduce((acc, e) => acc + e);
    const sum2 = Array.from(Array(nums.length + 1).keys()).reduce((acc, e) => acc + e);

    return Math.abs(sum1 - sum2);
};

module.exports = missingNumber;