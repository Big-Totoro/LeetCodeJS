const compress = require('./_443');

test('test11', () => {
    const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];

    expect(compress(chars)).toStrictEqual(6);
});