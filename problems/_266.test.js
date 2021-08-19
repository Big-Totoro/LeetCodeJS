const canPermutePalindrome = require('./_266');

test('test11', () => {
    expect(canPermutePalindrome('code')).toBeFalsy();
});

test('test12', () => {
    expect(canPermutePalindrome('aab')).toBeTruthy();
});

test('test13', () => {
    expect(canPermutePalindrome('carerac')).toBeTruthy();
});