/**
 * @param {string} s
 * @return {boolean}
 */
const canPermutePalindrome = function (s) {
    const set = new Set();

    for (let c of s) {
        if (set.has(c)) {
            set.delete(c);
        } else {
            set.add(c);
        }
    }

    return set.size === 0 || set.size === 1;
};

module.exports = canPermutePalindrome;