const reverseWords = require('./_557');

test('test11', () => {
    const s = "Let's take LeetCode contest";

    expect(reverseWords(s)).toStrictEqual("s'teL ekat edoCteeL tsetnoc");
});