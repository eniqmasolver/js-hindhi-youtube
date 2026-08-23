

// let mydate=new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());



//creting our own date
// const createDAte=new Date(2026,7,23,8,15)
// console.log(createDAte);

// let date=new Date("2026-01-14")
// console.log(date);

// console.log(Date.now());

// let newdate=new Date()
// console.log(newdate.getDate());
// console.log(newdate.getTime());
// console.log(newdate.getFullYear());


let date=new Date()
console.log(date.toLocaleString("default",{
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"

}));
