// const friends=["kartik","keshav","dishant","prakhar"]
// console.log(friends);
// console.log(typeof friends);//object
// console.log(friends[2]);//access any elemet of array


//another way to define an array
const marvel=new Array("spiderman","captain_america","iron_man")
console.log(marvel);
console.log(typeof marvel);

//array methods
marvel.push(1)//insert an element in array
marvel.push(4)
console.log(marvel);
marvel.pop()//delete element 
console.log(marvel);

marvel.unshift(7)//inset element fronm front
console.log(marvel)
marvel.shift();//delete element from front 
console.log(marvel)


//array question methods
console.log(marvel.includes(9));//false
console.log(marvel.includes("spiderman"));//true

console.log(marvel.indexOf(4));//-1 does  not exist
console.log(marvel.indexOf(1));//3(index)

const newarray=marvel.join()
console.log(newarray)
console.log(typeof newarray);
;

//slice and splice
const array1=[1,2,3,4,5]
console.log("A",array1);
const chnage= array1.slice(1,3)
console.log(chnage);
console.log(array1)

//splice
const array2=[1,2,3,4,5]
console.log("b",array2);
const change2=array2.splice(1,3)
console.log(change2);
console.log(array2);














