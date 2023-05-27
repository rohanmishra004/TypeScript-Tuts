"use strict";
//convert to more or less specfic
let a = 'hello';
let b = a; //less specific type value
let c = a; //more sprcific type value
//Example for Type Assertions
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
//here we use assertion to assert a certain type 
let myVal = addOrConcat(2, 2, 'concat');
let newVal = addOrConcat(2, 2, 'add');
console.log(myVal, newVal);
console.log(typeof newVal);
//TS Code
//Assertions are mostly useful when working with DOM model
//This way we can assert the specific type of image Element
const img = document.querySelector('img');
// const newImg = document.getElementById('#img')
const newImg = document.getElementById('#img'); //if we ! to this , it removes the null prop so it only has HTMLElement assertion to it
//we can also use angle bracket before img to assert its type
const nextImg = document.getElementById('#New'); //but this will not work in TSX file for react
//since img is HTMLImageElement it has access to certain properties that normal HTML element does not have - ex
img.src; //since its an image element , it knows that it has src prop
newImg.src; //since ts conciders it an HTML element , its not sure of its src property
