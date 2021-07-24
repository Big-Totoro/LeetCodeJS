/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let result = 0;

    nums.forEach((num) => {
        result ^= num;
    })

    return result;
};

module.exports = singleNumber;