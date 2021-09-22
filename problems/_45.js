/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 0;
    }

    let steps = 1;
    let jump = nums[0];
    let maxJump = nums[0];
    for (let i = 0; i < nums.length - 1; ++i) {
        if (i === nums.length - 1) {
            return steps;
        }

        jump = Math.max(i + nums[i], jump);
        if (i === maxJump) {
            maxJump = jump;
            steps++;
        }
    }

    return steps;
};

module.exports = jump;