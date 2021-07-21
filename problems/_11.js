/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
    let maxSquare = 0;
    let l = 0;
    let r = height.length - 1;

    while (l < r) {
        maxSquare = Math.max(maxSquare, Math.min(height[l], height[r]) * (r - l));
        if (height[l] < height[r]) {
            ++l;
        } else {
            --r;
        }
    }

    return maxSquare;
};

module.exports = maxArea