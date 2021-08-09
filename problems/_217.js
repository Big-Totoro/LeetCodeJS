/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const set = new Set();

    const result = nums.some(e => {
        if (set.has(e)) {
            return true;
        }
        set.add(e);
    });

    return result;
};

module.exports = containsDuplicate;