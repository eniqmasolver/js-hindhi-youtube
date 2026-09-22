// //for of
// let arr=["ram","shyam","radha"]
// for (const a of arr) {
//     if(a=="shyam") continue
//     console.log(a);
    
// }

// const greeting="good morning everyone"

// for (const greet of greeting) {
//     if(greet==" ") continue
//     console.log(`each char is ${greet}`);
    
    
// }

// //maps
//  const map=new Map()
//  map.set("kanish","21")
//  map.set("kartik","20")
//  map.set("keshav","29")
//  console.log(map);
 

//  for (const [key,value] of map) {
//     console.log(`${key} : ${value}`);
    
//  }


//  note:map is iterable by forof but object is not iterable by forof


//forin

// const object={
//     name:"kanish",
//     age:21,
//     college:"ABES ENGINNERING COLLEGE"
// }

// for (const key in object) {
//    console.log(`${key} : ${object[key]}`);
   
    
// }


// const array=["kanish","anu","aniket","ravan"]
// for (const key in array) {
  
//     console.log(`array index ${key} is ${array[key]}`);
    
// }



const map=new Map()
map.set("kanish",20)
map.set("keshav",21)
map.set("kartik",22)
for (const key in map) {
  console.log(key);
  
    
    
}