/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
    let diff = x ^ y;
    let result = 0;

    while (diff > 0) {
        result += diff & 1;
        diff >>= 1;
    }

    return result;
};

module.exports = hammingDistance;