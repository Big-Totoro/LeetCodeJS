const fib = require('./_509');

test('test11', () => {
    expect(fib(2)).toStrictEqual(1);
});

test('test12', () => {
    expect(fib(3)).toStrictEqual(2);
});

test('test13', () => {
    expect(fib(4)).toStrictEqual(3);
});