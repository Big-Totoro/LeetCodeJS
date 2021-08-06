const isHappy = require('./_202');

test('test11', () => {
    const n = 1111111;

    const result = isHappy(n);

    expect(result).toBeTruthy();
});

test('test12', () => {
    const n = 2;

    const result = isHappy(n);

    expect(result).toBeFalsy();
});