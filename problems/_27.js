/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function (nums, val) {
    if (nums.length === 0) {
        return 0;
    }

    let l = 0;
    let r = nums.length;

    while (l < r) {
        if (nums[l] === val) {
            let temp = nums[r - 1];
            nums[r - 1] = nums[l];
            nums[l] = temp;

            --r;
        } else {
            ++l;
        }
    }

    return l;
};

module.exports = removeElement;