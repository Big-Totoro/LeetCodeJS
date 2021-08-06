/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    if (n === 1 || n === 7) {
        return true;
    }

    let num = n;
    if (num > 1 && num < 10) {
        num **= 2;
    }

    const set = new Set();
    while (num >= 10) {
        num = divideAndSum(num);
        if (num === 0) {
            break;
        } else if (num === 1 || num === 7) {
            return true;
        }
        if (set.has(num)) {
            return false;
        }
        set.add(num);
    }

    return (num === 1);
};

function divideAndSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += (num % 10) ** 2;
        num = Math.trunc(num / 10);
    }

    return sum;
}

module.exports = isHappy;