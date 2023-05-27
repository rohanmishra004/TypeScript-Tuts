"use strict";
//Type alias
//Literal type
let myName;
let username;
username = 'Rohan';
//functions
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 5));
const logMsg = (message) => {
    console.log(message);
};
//so now if we have to define same function add as above we can simply use this
const add2 = (a, b) => {
    return a + b;
};
console.log(add2(23, 5));
//optinal parameter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Rest parametet
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
//NEVER
const createError = (msg) => {
    throw new Error(msg);
};
const checkNumString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
