const jump = require('./_45');

test('test11', () => {
    const nums = [2, 3, 1, 1, 4];

    expect(jump(nums)).toStrictEqual(2);
});

test('test12', () => {
    const nums = [2, 3, 0, 1, 4];

    expect(jump(nums)).toStrictEqual(2);
});

test('test13', () => {
    const nums = [1, 2, 3];

    expect(jump(nums)).toStrictEqual(2);
});

test('test14', () => {
    const nums = [1, 3, 2];

    expect(jump(nums)).toStrictEqual(2);
});

test('test15', () => {
    const nums = [1, 2];

    expect(jump(nums)).toStrictEqual(1);
});

test('test16', () => {
    const nums = [1, 1, 2, 1, 1];

    expect(jump(nums)).toStrictEqual(3);
});

test('test17', () => {
    const nums = [3, 2, 1];

    expect(jump(nums)).toStrictEqual(1);
});

test('test18', () => {
    const nums = [1, 2, 0, 1];

    expect(jump(nums)).toStrictEqual(1);
});

test('test19', () => {
    const nums = [1, 1, 1, 1];

    expect(jump(nums)).toStrictEqual(3);
});

test('test20', () => {
    const nums = [1, 1, 1, 2, 1];

    expect(jump(nums)).toStrictEqual(4);
});