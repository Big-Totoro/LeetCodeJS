const addDigits = require('./_258');

test('test11', () => {
    const num = 38;
    const result = addDigits(num);

    expect(result).toStrictEqual(2);
});

test('test12', () => {
    const num = 0;
    const result = addDigits(num);

    expect(result).toStrictEqual(0);
});

test('test13', () => {
    const num = 18;
    const result = addDigits(num);

    expect(result).toStrictEqual(9);
});