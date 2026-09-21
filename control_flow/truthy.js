const userEmail=""
if (userEmail) {
    console.log('got a user email');
    
} else {
    console.log("dont have user email");
    
    
}

/* falsy value:false,0,-0,bigint,"",null,undefined,nan


truthy value:"0","false"," ",{},[],function(){}
*/


const array=[]
if(array.length===0){
    console.log("array is empty");
    
}

const empty={}
if(Object.keys(empty).length===0){
    console.log("emplty object");
    
}


// null colancing operator

let val;
val= 2??3
console.log(val);
val= null??3
console.log(val);
val= undefined??3
console.log(val);
val= undefined??null
console.log(val);
val= undefined??2??4
console.log(val);



// ternary operator
let num =4
num%2==0?console.log(`${num} is even`):console.log(`${num} is odd`);



