/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let counter = 0;

    while (n !== 0) {
        counter += n & 0x80000000 ? 1 : 0;
        n <<= 1;
    }

    return counter;
};

module.exports = hammingWeight;