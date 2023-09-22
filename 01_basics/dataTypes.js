"use strict"; //treats JS code as newer version

//  code readability is important
// avoid using ; after end
console.log('this is message')
console.log('this is another')


/* 
Refer devdocs.io for more detailed information on each of the following data types and use cases.

Javascript is a dynamically typed language
Variables can hold different types of values without explicit declaration

Data types are divided into - primitive and refrence data types

*/

// Primitive Data types
let num = 32; // Integer
let floatNum = 3.13 // Floating-point number

// String represents a squence of characters enclosed in a Single quote or a double quote or backticks
let name = 'sushant'
let fullName = `Sushant`
let middleName = "Suryakant"

// Boolean represents true or false values
let isLoggedIn = true;
let isOnline = false;

// Undefined represents when a variable has been declared but not assigned
let userAuth; // here the variable has been declared but has not been assigned

//Null represents intentional absence of any object or value
let emptyValue = null;
console.log(typeof null);  // outputs OBJECT as type of NuLL    
console.log(typeof undefined)  // outputs undefined as the output type

//Symbol represents a unique and immutable value often used as object keys
const uniqueSymbol = Symbol('description')

// BigInt represents large integers that cannot be accurately represented by the number data type
const bigIntValue = 1234567890123456789012345678901234567890n;

// -----------------------------------------------------
// Reference data types

// Object represents the collection of key-value pairs, also known as properties and methods. Objects are used for
// far more complex data structures
let person = {
    name: "John",
    age: 30
};

let user = {
    id:"1",
    pwd:'abcd'
}

//Arrays are specialized type of values that store a list of values indexed by numeric indices
let fruits = ['apple','banana','orange','pineapple']
