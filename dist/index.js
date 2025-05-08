"use strict";
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input === null || input === void 0 ? void 0 : input.toLocaleLowerCase();
}
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
