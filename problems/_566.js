/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length < r * c) {
        return mat;
    }

    let row = 0;
    let col = 0;
    let result = Array(r);

    for (let i = 0; i < result.length; ++i) {
        result[i] = Array(c);
    }

    for (let i = 0; i < mat.length; ++i) {
        for (let j = 0; j < mat[i].length; ++j) {
            if (col >= result[row].length) {
                row++;
                col = 0;
            }
            if (row < result.length) {
                result[row][col++] = mat[i][j];
            }
        }
    }

    return result;
};

module.exports = matrixReshape;