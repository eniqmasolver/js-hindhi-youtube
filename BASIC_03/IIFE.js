//immediately invoked function expression

//named iife
(function print(){
    console.log("hello everyone");
    
})();

(()=>{
    console.log("jai shree ram");
    
})();//semicolon is written to execute another iife function

(()=>(console.log("kanish"))

)();
//parametrized iife
((name)=>(console.log(`${name},hello everyone`)
))("kanish")