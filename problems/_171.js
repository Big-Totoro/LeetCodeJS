/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    let result = 0;
    let power = 0;
    const ALPHABET_OFFSET = 64;
    const NOTATION = 26;

    for (let i = columnTitle.length - 1; i >= 0; --i) {
        result += (columnTitle.charCodeAt(i) - ALPHABET_OFFSET) * (NOTATION ** power);
        power++;
    }

    return  result;
};

module.exports = titleToNumber;