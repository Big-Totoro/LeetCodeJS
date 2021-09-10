/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
const shortestDistance = function (maze, start, destination) {
    if (maze.length === 0 || maze[0].length === 0) {
        return 0;
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const [startRow, startCol] = start;
    const [destinationRow, destinationCol] = destination;

    const distance = [];
    for (let i = 0; i < maze.length; ++i) {
        const row = [];
        for (let j = 0; j < maze[0].length; j++) {
            row.push(Number.MAX_VALUE);
        }
        distance.push(row);
    }
    distance[startRow][startCol] = 0;

    const queue = [];
    queue.push({startRow, startCol});

    while (queue.length > 0) {
        let {startRow, startCol} = queue.pop();

        for (let direction of directions) {
            let [r, c] = direction;
            let row = startRow + r;
            let col = startCol + c;

            let steps = 0;
            while (isValid(maze, row, col) && maze[row][col] <= 0) {
                row += r;
                col += c;
                ++steps;
            }

            row -= r;
            col -= c;

            if (isValid(maze, row, col) && distance[row][col] > distance[startRow][startCol] + steps) {
                distance[row][col] = distance[startRow][startCol] + steps;
                queue.unshift({startRow: row, startCol: col});
            }
        }
    }

    const destinationAtDestination = distance[destinationRow][destinationCol];

    return (destinationAtDestination === Number.MAX_VALUE ? -1 : destinationAtDestination);
};

function isValid(maze, r, c) {
    return (r >= 0) && (c >= 0) && (r < maze.length) && (c < maze[0].length);
}

module.exports = shortestDistance;