const isPalindrome = require('./_9');

test("test11", () => {
    const x = 121;

    const result = isPalindrome(x);
    expect(result).toBeTruthy();
})

test("test12", () => {
    const x = -121;

    const result = isPalindrome(x);
    expect(result).toBeFalsy();
})

test("test13", () => {
    const x = 10;

    const result = isPalindrome(x);
    expect(result).toBeFalsy();
})

test("test14", () => {
    const x = -101;

    const result = isPalindrome(x);
    expect(result).toBeFalsy();
})

test("test15", () => {
    const x = 9999;

    const result = isPalindrome(x);
    expect(result).toBeTruthy();
})
