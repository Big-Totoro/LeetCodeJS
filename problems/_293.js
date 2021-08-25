/**
 * @param {string} currentState
 * @return {string[]}
 */
const generatePossibleNextMoves = function (currentState) {
    const result = [];

    for (let i = 1; i < currentState.length; ++i) {
        if (currentState[i - 1] === '+' && currentState[i] === '+') {
            const left = currentState.substring(0, i - 1);
            const right = currentState.substring(i + 1);
            result.push(left.concat("--").concat(right));
        }
    }

    return result;
};

module.exports = generatePossibleNextMoves;