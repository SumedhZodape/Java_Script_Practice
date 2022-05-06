// var num1 = 45;
// num1 +=5;
// console.log(num1)



// var num1 = 10;
// var num2 ="10";
// console.log(num1 == num2)



// var num1 = 10;
// var num2 = "10" ;
// console.log(num1 === num2)



// var a= 45;
// var b= 45;

// console.log(a!=b)
 



// var num1 = 3;
// var num2 = 2;
// num1<num2?console.log("Hello"):console.log("By");



// let avengers = ["Thor", "Ironman", "Capton America", "Hulk", "Balck widow", "Hawkeye"];

// for(let i=0; i<avengers.length;i++){
//     console.log(avengers[i])
// }


// avengers.forEach(function(a,i){
//     console.log(a,i)
// })


// avengers.forEach((a,i)=>{
//     console.log(a)
// })

// function doSomething(para){
//     console.log("My own code");
//     para()
// }

// doSomething(()=>{
//     console.log("hello")
// })


let avengers=[
    {
        fname:"sumedh",
        age:21
    },
    {
        fname:"Harshal",
        age:32
    },
    {
        fname:"Aditya",
        age:23
    },
    {
        fname:"Rahul",
        age:21
    }
]



// for(let i=0; i<avengers.length; i++){
//     console.log(avengers[i].fname)
//     console.log(avengers[i].age)
// }


avengers.forEach((a)=>{
    console.log(a.age)
})