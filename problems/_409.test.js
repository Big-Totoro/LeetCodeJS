const longestPalindrome = require('./_409');

test('test11', () => {
    const s = "abccccdd";

    expect(longestPalindrome(s)).toStrictEqual(7);
});