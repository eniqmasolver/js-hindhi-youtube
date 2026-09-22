const mynum=[1,2,3,4,5,6]

const sum=mynum.reduce((acc,curval)=>{
    console.log(`acc:${acc} and curval:${curval}`);
    
return acc+curval
},0)
console.log(sum);


const shoppingCart=[
    {
        course:"js"
        ,price:2000
    },
    {
        course:"c++"
        ,price:4000
    },
    {
        course:"java"
        ,price:1000
    },
]
const totalPrice=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice);
const t=shoppingCart.map((item)=>{
    let i=0
    let sum=item.price+i
    return sum
})
console.log(t);
