const shortestDistance = require('./_243');

test('test11', () => {
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const word1 = "coding";
    const word2 = "practice";

    const result = shortestDistance(wordsDict, word1, word2);

    expect(result).toStrictEqual(3);
});

test('test12', () => {
    const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
    const word1 = "makes";
    const word2 = "coding";

    const result = shortestDistance(wordsDict, word1, word2);

    expect(result).toStrictEqual(1);
});

test('test13', () => {
    const wordsDict = ["a", "a", "b", "b"];
    const word1 = "a";
    const word2 = "b";

    const result = shortestDistance(wordsDict, word1, word2);

    expect(result).toStrictEqual(1);
});