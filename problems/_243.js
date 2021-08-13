/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = function(wordsDict, word1, word2) {
    if (wordsDict.length === 0) {
        return 0;
    }

    let p1 = -1;
    let p2 = -1;
    let shortest = wordsDict.length;

    for (let i = 0; i < wordsDict.length; ++i) {
        if (wordsDict[i] === word1) {
            p1 = i;
        } else if (wordsDict[i] === word2) {
            p2 = i;
        }

        if (p1 !== -1 && p2 !== -1) {
            shortest = Math.min(shortest, Math.abs(p1 - p2));
        }
    }

    return shortest;
};

module.exports = shortestDistance;