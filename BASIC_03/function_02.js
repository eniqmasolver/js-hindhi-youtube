function CalculateCart(...num) {
    return num
}
console.log(CalculateCart(200,400,500));
 //note:...(it means rest operator )


 //passing object in argument 

//  const user={
//     name:"knaish",
//     age:21
//  }
//  function handleObject(anyobject){
//     return `name is ${anyobject.name} and age is ${anyobject.age}`
//  }
//  console.log(handleObject(user));
 
 //we can also [ass object directly

//  function handleObject(anyobject){
//     return `name is ${anyobject.name} and age is ${anyobject.age}`
//  }
//  console.log(handleObject(
//     {
//         name:"kanish",
//         age:21
//     }
//  ));

 //passing an array

 function handlearray(anyarray){
    return `third value is :${anyarray[2]}`
 }
 console.log(handlearray(
   [10,20,30]
 ));
 