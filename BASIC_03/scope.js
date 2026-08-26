// const a=2
// let b=3
// var c=5

// if(true){
// const a=20
// let b=30
// var c=50
// console.log(a);//block scope
// console.log(b);//block scope
// console.log(c);//block scope

// }
// console.log(a);//global scope
// console.log(b);//global scope
// console.log(c);//block scope
// //note : while we printing var variable its give only block scope variable thats we dont use var



function one(){

    const username="kanish"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
        // console.log(website);
two()
}
one()