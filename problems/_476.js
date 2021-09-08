/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    let n = num;
    let result = num;
    let bit = 1;

    while (n > 0) {
        result ^= bit;
        n >>= 1;
        bit <<= 1;
    }

    return result;
};

module.exports = findComplement;