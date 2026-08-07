//there are two types of memory
//stack:(primitive datatypes)
//heap:(non primitive datatypes)

let name="kanish"
let anothername=name
console.log(anothername);
//now changing anothername value
anothername="gaurav"
console.log(name);
console.log(anothername);
//note: in stack memory only copy is saved ,so any change occur it will no effect original once


//heap concept
let user_one={
    name:"kanish",
    email:"kanish12@gmail.com",
    password:223
}
let user_two=user_one
console.log(user_two.email);
user_two.email="gaurav12@gmail.com"

console.log(user_one.email);
console.log(user_two.email);



// https://1drv.ms/i/c/b54ee12104f821be/IQDqFxa41zIxQJwvgAFrRWBzAWorZeUTZOrql2Umm5J5ZNc?e=C2i8pJ
