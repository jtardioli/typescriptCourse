"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        return result;
    }
    else {
        return result.toString();
    }
}
const combinedAges = combine(30, 36, "as-number");
console.log(combinedAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
