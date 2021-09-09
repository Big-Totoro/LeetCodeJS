/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
    const row1 = new Set("qwertyuiop".split(''));
    const row2 = new Set("asdfghjkl".split(''));
    const row3 = new Set("zxcvbnm".split(''));

    const result = [];

    for (let i = 0; i < words.length; ++i) {
        if (contains(row1, words[i].toLowerCase())) {
            result.push(words[i]);
        } else if (contains(row2, words[i].toLowerCase())) {
            result.push(words[i]);
        } else if (contains(row3, words[i].toLowerCase())) {
            result.push(words[i]);
        }
    }

    return result;
};

function contains(row, word) {
    for (let j = 0; j < word.length; ++j) {
        if (!row.has(word[j])) {
            return false;
        }
    }

    return true;
}

module.exports = findWords;