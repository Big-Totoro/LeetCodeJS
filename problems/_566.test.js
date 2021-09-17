const matrixReshape = require('./_566');

test('test11', () => {
    const mat = [[1, 2], [3, 4]], r = 1, c = 4;

    expect(matrixReshape(mat, r, c)).toStrictEqual([[1, 2, 3, 4]]);
});

test('test12', () => {
    const mat = [[1, 2], [3, 4]], r = 2, c = 2;

    expect(matrixReshape(mat, r, c)).toStrictEqual([[1, 2], [3, 4]]);
});

test('test13', () => {
    const mat = [[1, 2], [3, 4]], r = 4, c = 1;

    expect(matrixReshape(mat, r, c)).toStrictEqual([[1], [2], [3], [4]]);
});

test('test14', () => {
    const mat = [[1, 2]], r = 1, c = 1;

    expect(matrixReshape(mat, r, c)).toStrictEqual([[1], [2], [3], [4]]);
});