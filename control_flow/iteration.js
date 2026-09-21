for (let index =1; index <= 10; index++) {
    if(index===1)console.log("now conting is startin from 1 and end at 10");
    
    console.log(index);
    
    
}
for (let i= 1; i <=10 ; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}x${j}=${i*j}`);
        
        
    }
    

}

    let arr=["kanish","dishant","dev","medansh"]
for (let i = 0; i < arr.length; i++) {
    console.log(`index ${i} is ${arr[i]}`);
    
    
}


//break and continue

for (let i = 1; i < 10; i++) {
    if(i===4) break
    console.log(i);
    
    
}
for (let i = 1; i < 10; i++) {
    if(i===4){
        console.log("skipping 4");
        continue
        
    }
    console.log(i);
    
    
}