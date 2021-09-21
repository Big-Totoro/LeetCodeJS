/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let longest = 0;
    for (const v of dp) {
        longest = Math.max(v, longest);
    }

    return longest;
};

module.exports = lengthOfLIS;