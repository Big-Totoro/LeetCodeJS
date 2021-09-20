const checkInclusion = require('./_567');

test('test11', () => {
    const s1 = "ab", s2 = "eidbaooo";

    expect(checkInclusion(s1, s2)).toBeTruthy();
});

test('test12', () => {
    const s1 = "ab", s2 = "eidboaoo";

    expect(checkInclusion(s1, s2)).toBeFalsy();
});