/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    for (let ch of s) {
        let c = map.get(ch);
        if (c === undefined) {
            c = 0;
        }
        map.set(ch, ++c);
    }

    for (let ch of t) {
        if (map.has(ch)) {
            let c = map.get(ch);
            --c;
            if (c <= 0) {
                map.delete(ch);
            } else {
                map.set(ch, c);
            }
        }
    }

    return (map.size === 0);
};

module.exports = isAnagram;