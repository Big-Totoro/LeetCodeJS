/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
const findShortestWay = function (maze, ball, hole) {
    if (maze.length === 0 || maze[0].length === 0) {
        return 'impossible';
    }

    let [ballRow, ballCol] = ball;
    let [holeRow, holeCol] = hole;
    const directions = [[-1, 0, 'u'], [1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r']];
    const distance = [];
    for (let i = 0; i < maze.length; ++i) {
        const row = [];
        for (let j = 0; j < maze[0].length; j++) {
            row.push(Number.MAX_VALUE);
        }
        distance.push(row);
    }
    distance[ballRow][ballCol] = 0;

    const queue = [];
    queue.push({ballRow, ballCol});

    while (queue.length > 0) {
        let {ballRow, ballCol} = queue.pop();

        for (let direction of directions) {
            let [row, col] = direction;

            let newBallRow = ballRow + row;
            let newBallCol = ballCol + col;

            let steps = 0;
            while (isValid(maze, newBallRow, newBallCol) && maze[newBallRow][newBallCol] !== -1) {
                newBallRow += row;
                newBallCol += col;
                ++steps;

                if (newBallRow === holeRow && newBallCol === holeCol) {
                    break;
                }
            }

            let newDist = distance[ballRow][ballCol] + steps;
            if (distance[newBallRow][newBallCol] > newDist) {
                distance[newBallRow][newBallCol] = newDist;
                queue.push({ballRow: newBallRow, ballCol: newBallCol});
            }
        }
    }

    return 'impossible';
};

function isValid(maze, row, col) {
    return (row >= 0) && (col >= 0) && (row < maze.length) && (col < maze[0].length);
}

module.exports = findShortestWay;