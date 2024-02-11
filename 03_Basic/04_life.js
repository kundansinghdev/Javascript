// 1. Named IIFE (Immediately Invoked Function Expression)
(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();

// 2. Anonymous IIFE with Parameter
((name)=>{
    console.log(`DB CONNECTED TWO${name}`);
})(' kundan');

// 3. Explanation and Example Addition
// Here's an additional example to further clarify the concept:
(function(){
    // Declare a variable x
    let x = 10;
    // Log the value of x
    console.log(`The value of x is ${x}`);
})();
