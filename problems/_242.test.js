const isAnagram = require('./_242');

test('test11', () => {
    const s = 'anagram';
    const t = 'nagaram';

    const result = isAnagram(s, t);

    expect(result).toBeTruthy();
});

test('test12', () => {
    const s = 'a';
    const t = 'ab';

    const result = isAnagram(s, t);

    expect(result).toBeFalsy();
});