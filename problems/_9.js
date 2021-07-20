/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }

    let num = x;
    let result = 0;

    while (num > 0) {
        result += num % 10;
        num = Math.trunc(num / 10);
        if (num > 0) {
            result *= 10;
        }
    }

    return result === x;
}

module.exports = isPalindrome