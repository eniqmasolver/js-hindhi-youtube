  const arr1=[1,2,3,4]
  const arr2=["ram","shyam","karn"]
//   arr1.push(arr2)
//   console.log(arr1);

  //concatenation
//   const arr3=arr1.concat(arr2)
//   console.log(arr3);
//   console.log(arr3[6]);
  
  //spread opertor 
  
  const array=[...arr1,...arr2]
  console.log(array);

  const another_arrray=[1,2,3,[1,4,[5,6,[5,[5]]]]]
  console.log(another_arrray.flat(Infinity));
  
  console.log(Array.isArray("kanish"));
  console.log(Array.from("kanish"));
  
 let score1=100;
  
 let score2=100;
 let score3=100;
  console.log(Array.of(score1,score2,score3));
  
