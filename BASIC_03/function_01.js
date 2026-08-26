//method 1
// function greet(){
// console.log("jai shree ram");

// }
// greet()

//method2
// const greet=function(){
//     console.log("jai shree ram");

// }
// greet()

//parametrize method
// function addition(num1,num2){
// console.log(num1+num2);

// }
// addition(10,20)


//storing in element
// function addition(num1,num2){
// return num1+num2;

// }
// const result=addition(10,4)
// console.log("result:",result);



function loggedin(name){
 if(name===undefined) {
    console.log("pleadse enter the name")
    return
    
 }
 return `${name} just logged in`
}
console.log(loggedin());
