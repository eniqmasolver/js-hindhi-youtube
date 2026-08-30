// const user={
//     name:"kanish gupta",
//     price:900,
//     welcomeMessage:function(){
//         console.log(`${this.name},welcome to website`);
//         console.log(this);
        
        
//     }
// }
// user.welcomeMessage()
// user.name="dishant"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//    const username="kanish"
//     console.log(this.username);//cannot acess in function 

    
// }
// chai()



//about arrow function

// const chai=()=>{
//     const username="kanish"
//     console.log(username);
    
// }
// chai()

//explicit function

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,4));

//implicit function

const addtwo=(num1,num2)=> (num1+num2)
console.log(addtwo(3,4));

/*note:in implicit function we dont need to right return keyword or
or we can say that while we using () parenthesis return keyword is not necessary */


//taking object 
const object=()=>({username:"kanish"})
console.log(object());
