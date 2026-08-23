//singelton object
const user=new Object()
user.name="kanish"
user.email="kanishgupta2169@gmail.com"
user.age=21
console.log(user);
console.log(user["name"]);

//nested object
let new_user={
    full_name:{
        first_name:"kanish",
        last_name:"gupta,"
    },
    age:21,
    subject:["python","js","c++"]
}
console.log(new_user["full_name"]["first_name"]);

//two merge two object
let obj1={
    1:"a",
    2:"c",

}
let obj2={
    3:"d",
    4:"e"
}
let obj3={obj1,obj2}
console.log(obj3);

//spraed operator
let obj4={...obj1,...obj2}
console.log(obj4);



//json format 
const databse=[
    {
        name:"kanish",
        email:"kanish12@gmail.com"
    },
    {
        name:"keshav",
        email:"keshav12@gmail.com"
    },
    {
        name:"dishant",
        email:"dishnt12@gmail.com"
    },
    {
        name:"kartik",
        email:"kartik12@gmail.com"
    }
]
console.log(databse[2].email);

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

console.log(user.hasOwnProperty("name"));




