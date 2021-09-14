/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const result = Array(s.length).fill(' ');

    let head = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s.charAt(i) === ' ' || i === s.length - 1) {
            let tail = (i === s.length - 1) ? i : i - 1;
            let end = tail;

            while (head <= end) {
                result[tail--] = s[head++];
            }

            head = i + 1;
        }
    }

    return result.join('');
};

module.exports = reverseWords;