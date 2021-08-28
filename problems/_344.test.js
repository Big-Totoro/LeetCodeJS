const reverseString = require('./_344');

test('test11', () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).toStrictEqual(["o", "l", "l", "e", "h"]);
});