/**
 * @param {string[]} chars
 * @return {number}
 */
const compress = function (chars) {
    if (chars.length === 0) {
        return 0;
    } else if (chars.length === 1) {
        return 1;
    }

    let index = 0;
    let counter = 1;

    for (let i = 1; i < chars.length; ++i) {
        if (chars[i - 1] === chars[i]) {
            ++counter;
        } else {
            chars[index++] = chars[i - 1];
            if (counter > 1) {
                const num = counter.toString();
                for (let c of num) {
                    chars[index++] = c;
                }
            }
            counter = 1;
        }
    }

    chars[index++] = chars[chars.length - 1];
    if (counter > 1) {
        const num = counter.toString();
        for (let c of num) {
            chars[index++] = c;
        }
    }

    return index;
};

module.exports = compress;