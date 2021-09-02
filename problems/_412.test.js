const fizzBuzz = require('./_412');

test('test11', () => {
    const n = 3;

    expect(fizzBuzz(n)).toStrictEqual(['1', '2', "Fizz"]);
});

test('test12', () => {
    const n = 5;

    expect(fizzBuzz(n)).toStrictEqual(['1', '2', "Fizz", '4', "Buzz"]);
});

test('test13', () => {
    const n = 15;

    expect(fizzBuzz(n)).toStrictEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11",
        "Fizz", "13", "14", "FizzBuzz"]);
});