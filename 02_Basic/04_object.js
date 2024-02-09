const tinder=new Object() // singleten object
// console.log(tinder);
const tindrUser={} // non-singleten object
tindrUser.id=1234
tindrUser.name="kundan singh"
tindrUser.status=false
// console.log(tindrUser);
const regularUser={
    email:"kundansingh@gmail.com",
    id:123,
    fullname:{
        username:{
            firstName:"kundan",
            lastName:"singh"
        }
      
    }
}

// console.log(typeof(regularUser.id));
const obj1={1:"abc",2:"def"}
const obj2={3:"abc",4:"def"}
const obj3={5:"abc",6:"def"}
// const obj4={obj1,obj2,obj3}
// const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2[3],...obj2}


// console.log(obj4);

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const{courseInstructor:ci}=course
console.log(ci);
// console.log(courseInstructor);


// {
//    " name":"kundan",
//     "coursename":"js in hindi",
//     "price":"free"
// }

{
    {},
    {},
    {},
}