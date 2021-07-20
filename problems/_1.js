/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    const result = [];
    nums.some((num, i) => {
        let diff = target - nums[i];
        if (map.has(diff)) {
            result.push(map.get(diff));
            result.push(i);

            return true;
        }
        map.set(nums[i], i);
    });

    return result;
};

module.exports = twoSum