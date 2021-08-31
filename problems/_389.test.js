const findTheDifference = require('./_389');

test('test11', () => {
    const s = "abcd", t = "abcde";

    expect(findTheDifference(s, t)).toStrictEqual('e');
});

test('test12', () => {
    const s = "", t = "y";

    expect(findTheDifference(s, t)).toStrictEqual('y');
});

test('test13', () => {
    const s = "a", t = "aa";

    expect(findTheDifference(s, t)).toStrictEqual('a');
});

test('test14', () => {
    const s = "ae", t = "aea";

    expect(findTheDifference(s, t)).toStrictEqual('a');
});