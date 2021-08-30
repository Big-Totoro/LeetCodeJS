/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    const map = new Map();

    for (let i = 0; i < s.length; ++i) {
        if (map.has(s.charAt(i))) {
            map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
        } else {
            map.set(s.charAt(i), 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s.charAt(i)) === 1) {
            return i;
        }
    }

    return -1;
};

module.exports = firstUniqChar;