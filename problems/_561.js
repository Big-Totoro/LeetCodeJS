/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
    const sorted = nums.sort((a, b) => {
        return a - b;
    });

    let sum = 0;
    for (let i = 0; i < sorted.length; i += 2) {
        sum += sorted[i];
    }

    return sum;
};

module.exports = arrayPairSum;