const findWords = require('./_500');

test('test11', () => {
    const words = ["Hello", "Alaska", "Dad", "Peace"];

    expect(findWords(words)).toStrictEqual(["Alaska", "Dad"]);
});

test('test12', () => {
    const words = ["omk"];

    expect(findWords(words)).toStrictEqual([]);
});