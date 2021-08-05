/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let islands = 0;

    for (let r = 0; r < grid.length; ++r) {
        for (let c = 0; c < grid[0].length; ++c) {
            if (grid[r][c] === "1") {
                ++islands;
                dfs(grid, r, c);
            }
        }
    }

    return islands;
};

function dfs(grid, row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === "0") {
        return;
    }

    grid[row][col] = "0";

    dfs(grid, row + 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row - 1, col);
    dfs(grid, row, col - 1);
}

module.exports = numIslands;