const { titleToNumber: ttl } = require('./_171');

test("test11", () => {
    const columnTitle = 'A';

    const result = ttl(columnTitle);
    expect(result).toStrictEqual(1);
});

test("test12", () => {
    const columnTitle = 'AB';

    const result = ttl(columnTitle);
    expect(result).toStrictEqual(28);
});

test("test13", () => {
    const columnTitle = 'ZY';

    const result = ttl(columnTitle);
    expect(result).toStrictEqual(701);
});

test("test14", () => {
    const columnTitle = 'FXSHRXW';

    const result = ttl(columnTitle);
    expect(result).toStrictEqual(2147483647);
});