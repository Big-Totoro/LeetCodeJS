/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    if (numRows === 1) {
        return [[1]];
    }

    const triangle = [[1]];

    return helper(triangle, numRows - 1);
};

const helper = function (triangle, numRows) {
    if (numRows === 0) {
        return triangle;
    }

    const previousRow = triangle[triangle.length - 1];
    const currentRow = [1];
    for (let i = 0; i < previousRow.length - 1; ++i) {
        currentRow.push(previousRow[i] + previousRow[i + 1]);
    }

    currentRow.push(1);
    triangle.push(currentRow);

    helper(triangle, numRows - 1)

    return triangle;
}

module.exports = generate;