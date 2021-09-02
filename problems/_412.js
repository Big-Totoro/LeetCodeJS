/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
    const result = (n) => [...Array(n)].map((_, i) => {
        ++i;
        if (i % 15 === 0) {
            return "FizzBuzz";
        } else if (i % 3 === 0) {
            return "Fizz";
        } else if (i % 5 === 0) {
            return "Buzz";
        } else {
            return i.toString();
        }
    });

    return result(n);
};

module.exports = fizzBuzz;