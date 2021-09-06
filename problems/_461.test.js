const hammingDistance = require('./_461');

test('test11', () => {
    expect(hammingDistance(1, 4)).toStrictEqual(2);
});

test('test12', () => {
    expect(hammingDistance(3, 1)).toStrictEqual(1);
});