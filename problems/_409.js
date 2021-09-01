/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    const set = new Set();

    for (let i = 0; i < s.length; ++i) {
        if (set.has(s.charAt(i))) {
            set.delete(s.charAt(i));
        } else {
            set.add(s.charAt(i));
        }
    }

    return s.length - (set.size > 0 ? set.size - 1 : 0);
};

module.exports = longestPalindrome;