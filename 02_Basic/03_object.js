// singleton
Object.create


// object literals
const mysym=Symbol("key1")
const jsuser={
    name:"manav",
    "full Name":"Manav singh ",
    [mysym]:"key1",
    age:18,
    location: "patna",
    email: "manav@singh.xom",
    isloggedin:false
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full Name"]);
// Object.freeze(jsuser)
// console.log(jsuser[mysym]);
// jsuser.email="kundansingh@gmail.com"

jsuser.greeting=function(){
    console.log("Hello js user");
}

jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());