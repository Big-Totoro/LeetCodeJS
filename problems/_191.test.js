const hammingWeight = require('./_191')

test("test11", () => {
    const n = 21;

    const result = hammingWeight(n);
    expect(result).toStrictEqual(3);
});