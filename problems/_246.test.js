const isStrobogrammatic = require('./_246');

test('test11', () => {
    const num = '69';

    expect(isStrobogrammatic(num)).toBeTruthy();
});

test('test12', () => {
    const num = '88';

    expect(isStrobogrammatic(num)).toBeTruthy();
});

test('test13', () => {
    const num = '962';

    expect(isStrobogrammatic(num)).toBeFalsy();
});

test('test14', () => {
    const num = '1';

    expect(isStrobogrammatic(num)).toBeTruthy();
});