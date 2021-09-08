/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
const hasPath = function (maze, start, destination) {
    if (maze.length === 0 || maze[0].length === 0) {
        return false;
    }

    const directions = [{r: -1, c: 0}, {r: 1, c: 0}, {r: 0, c: -1}, {r: 0, c: 1}];
    const queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const coords = queue.pop();
        let startRow = coords[0];
        let startCol = coords[1];

        if (startRow === destination[0] && startCol === destination[1]) {
            return true;
        }

        for (let direction of directions) {
            let row = startRow + direction.r;
            let col = startCol + direction.c;

            while (isValid(maze, row, col) && maze[row][col] <= 0) {
                row += direction.r;
                col += direction.c;
            }

            row -= direction.r;
            col -= direction.c;

            if (isValid(maze, row, col) && maze[row][col] != -1) {
                maze[row][col] = -1;
                queue.unshift([row, col]);
            }
        }
    }

    return false;
};

function isValid(maze, r, c) {
    return (r >= 0) && (c >= 0) && (r < maze.length) && (c < maze[0].length);
}

module.exports = hasPath;