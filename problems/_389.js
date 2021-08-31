/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = function (s, t) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let count = 1;
        if (map.has(s.charAt(i))) {
            count = map.get(s.charAt(i)) + 1;
        }
        map.set(s.charAt(i), count);
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t.charAt(i))) {
            let count = map.get(t.charAt(i)) - 1;
            if (count <= 0) {
                map.delete(t.charAt(i));
            } else {
                map.set(t.charAt(i), count);
            }
        } else {
            return t.charAt(i);
        }
    }
};

module.exports = findTheDifference;