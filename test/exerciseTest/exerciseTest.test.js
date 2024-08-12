//const palindrome = require("./exerciseTest")
const palindrome = require("./exerciseTest")
test("Comproving if palindrome function is defined", () => {
    expect(palindrome).toBeDefined();
});

test("It's a palindrome" , () => {
    expect(palindrome("ottO")).toEqual(true);
})

test("Isn't a palindrome", () => {
    expect(palindrome("Jacobo")).toEqual(false);
})