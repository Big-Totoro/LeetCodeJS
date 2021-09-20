/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const freq1 = Array(26).fill(0);
    const freq2 = Array(26).fill(0);

    for (let i = 0; i < s1.length; ++i) {
        let code = s1.charCodeAt(i) - 'a'.charCodeAt(0);
        freq1[code]++;

        code = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        freq2[code]++;
    }

    for (let i = 0; i < s2.length - s1.length; ++i) {
        if (matches(freq1, freq2)) {
            return true;
        }

        freq2[s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)]++;
        freq2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return matches(freq1, freq2);
};

function matches(freq1, freq2) {
    for (let i = 0; i < freq1.length; ++i) {
        if (freq1[i] != freq2[i]) {
            return false;
        }
    }

    return true;
}

module.exports = checkInclusion;