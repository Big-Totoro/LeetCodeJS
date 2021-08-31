/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const findTheDifference = function (s, t) {
    const arr = Array(300).fill(0);

    for (let i = 0; i < s.length; ++i) {
        const sPosition = s.codePointAt(i);
        arr[sPosition] = arr[sPosition] + 1;

        const tPosition = t.codePointAt(i);
        arr[tPosition] = arr[tPosition] - 1;
    }
    const tPosition = t.codePointAt(t.length - 1);
    arr[tPosition] = arr[tPosition] - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return String.fromCharCode(i);
        }
    }
};

module.exports = findTheDifference;