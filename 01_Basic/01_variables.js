const accountId = 12345;
let accountEmail = "kundansingh";
var accountPassword = "12345";  // Avoid using var in modern JavaScript
let accountCity;  // Corrected the variable name to accountCity

// accountId = 1234;
/*prefer not use var becouse of issue in
 block scope and functional scope*/
 

console.table([accountId, accountCity, accountEmail, accountPassword]);
