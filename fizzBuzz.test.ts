import { FizzBuzz } from "./fizzBuzz";

test('should return one', () =>{
    expect(FizzBuzz(1)).toBe(1);
});

test('divisible by three return FIZZ', () =>{
    expect(FizzBuzz(12)).toBe("FIZZ");
    expect(FizzBuzz(3)).toBe("FIZZ");

});

test('divisible by five return BUZZ', () =>{
    expect(FizzBuzz(10)).toBe('BUZZ');
    expect(FizzBuzz(25)).toBe('BUZZ');
    expect(FizzBuzz(20)).toBe('BUZZ');
});

test('divisible by five and three return FIZZBUZZ', () =>{
    expect(FizzBuzz(15)).toBe("FIZZBUZZ");
    expect(FizzBuzz(30)).toBe("FIZZBUZZ");

});
