/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }

    let perimeter = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            let l = 0, r = 0, t = 0, b = 0;

            if (grid[i][j] === 0) {
                continue;
            }

            if (i === 0) {
                t = 0;
            } else {
                t = grid[i - 1][j] * 1;
            }

            if (j === 0) {
                l = 0;
            } else {
                l = grid[i][j - 1] * 1;
            }

            if (i === grid.length - 1) {
                b = 0;
            } else {
                b = grid[i + 1][j] * 1;
            }

            if (j === grid[i].length - 1) {
                r = 0;
            } else {
                r = grid[i][j + 1] * 1;
            }

            perimeter += grid[i][j] * 4 - l - r - t - b;
        }
    }

    return perimeter;
};

module.exports = islandPerimeter;