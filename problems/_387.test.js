const firstUniqChar = require('./_387');

test('test11', () => {
    const s = "leetcode";

    const result = firstUniqChar(s);

    expect(result).toStrictEqual(0);
});

test('test12', () => {
    const s = "loveleetcode";

    const result = firstUniqChar(s);

    expect(result).toStrictEqual(2);
});

test('test13', () => {
    const s = "aabb";

    const result = firstUniqChar(s);

    expect(result).toStrictEqual(-1);
});