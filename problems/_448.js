/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const set = new Set(nums);
    const result = [];

    nums.forEach((n, i) => {
        if (!set.has(i + 1)) {
            result.push(i + 1);
        }
    });

    return result;
};

module.exports = findDisappearedNumbers;