/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = function(num) {
    const map = new Map();
    map.set('1', '1');
    map.set('0', '0');
    map.set('8', '8');
    map.set('6', '9');
    map.set('9', '6');

    if (num.length === 1) {
        return (num.charAt(0) === '0' || num.charAt(0) === '1' || num.charAt(0) === '8');
    }

    let l = 0;
    let r = num.length - 1;

    while(l <= r) {
        if (!map.has(num.charAt(l)) || !map.has(num.charAt(r)) || num.charAt(r) !== map.get(num.charAt(l))) {
            return false;
        }
        ++l;
        --r;
    }

    return true;
};

module.exports = isStrobogrammatic;