// primitive
// 7 type : string Number,Boolearn, null,underfined,Symbol,BigInt



// Peferemce (Non Primitve)
// Array,Objects,Functions
// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object




// ++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) copy of value
// let myname="kundansingh"
// let othername=myname
// othername="manav singh"
// console.log(othername)

// Heap (Non-Primitive) Reference of value

let userOne={
    email:"kundansingh@gmail.com",
    useId:"index@ybl"
};
let userTwo=userOne;
userTwo.email="manavsingh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email);

