const canWinNim = require('./_292');

test('test11', () => {
    expect(canWinNim(4)).toBeFalsy();
});

test('test12', () => {
    expect(canWinNim(1)).toBeTruthy();
});

test('test13', () => {
    expect(canWinNim(2)).toBeTruthy();
});