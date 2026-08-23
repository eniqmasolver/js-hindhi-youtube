//object literals


const mysym=Symbol("key1")

const user={
    name:"kanish gupta",
    "full_name":"kanish gupta",
  [  mysym]:"key1",
    email:"kanishgupta2169@gmail.com",
    age:21,
    isloggedin:false,
    latloggindays:["monday","wednesday"]

}
console.log(user);
console.log(typeof user);
console.log(user.email);
console.log(user["email"]);
console.log(user["full_name"]);
console.log(user[mysym]);
console.log(typeof user[mysym]);

user.name="rahul sharma"
console.log(user.name);
// Object.freeze(user)//you cannot change the value
user.email="sytsfdsyufsdagsyu"
console.log(user.email);

user.greeting=function(){
    console.log("jai shree ram");
    
}
console.log(user.greeting());
console.log(user);

user.greetuser=function(){
    console.log(`hello user ${this.name} having email id ${this.email} hope you are fine`);
    
}
console.log(user.greetuser());



