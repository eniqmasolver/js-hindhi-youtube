const number=[1,2,3,4,5,6,7]
// const newnum=number.map((num)=>{
//     return num+10
// })
// console.log(newnum);


//chainning

const n=number
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num<=31)
console.log(n);
