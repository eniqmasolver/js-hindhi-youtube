//primitive
//7 types: string,number,boolean,bigint,null,undefined,symbol


// number
const score=33;
const value=33.5;

//boolean
const islooogedin=true;
const isloggedin=false;

//null
const temp=null;

//symbol
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);

//bigint
let bignumber=1232n

//non primitive
//mainy 3 types: array,object,function

//array

let marval_heroes=["spidermen","captain_america","ironman"]
console.log(marval_heroes);
console.log(typeof marval_heroes);//object
//note: array is type of object only
console.log(Array.isArray(marval_heroes));//true means array haa

//object
let user_info={
    name:"kanish gupta",
    email:"kanishgupta2169@gmail.com",
    age:21,
    male:true
}
console.log(user_info);
console.log(typeof user_info);//object
console.log(user_info.name);

//function
let greet=function(){
    console.log("good morning ,jai shree ram");
    
}
greet()
console.log(greet);


