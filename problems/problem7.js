var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["hi", 6],
    ["boo", -2],
    [6, "hi"],
    ["meow", 3],
    ["woof", 0],
    ["moo", 5],
    ["bye", 8]
]

let outputs = [
    "hihihihihihi",
    "",
    undefined,
    "meowmeowmeow",
    "",
    "moomoomoomoomoo",
    "byebyebyebyebyebyebyebye"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(str, n) {
    if (isNaN(n)) {
        return undefined;
    } else if (n <= 0) {
        return "";
    } else if (typeof str === "string") {
        return str.repeat(n);
    } else {
        return undefined;
    }
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);