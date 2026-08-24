// // console.log("helllo i am using js "); // console.log

// // function sum(a,b){
// //     return a+b;

// // }
// // sum(23,30);
// // console.log( sum(23,30));

// var a=34;
// if(a>20){
//     var=45;
//     console.log("a inside a ")
// }
// const sum =function sum(a,b){
//     return a+b;
// }
// sum(23,30)

// console.log(sum(23,30));
// const sum=(msg)=>{
//     return 20+90+msg
// }
// sum("hey...");
// console.log(sum("hey..."));



//IIFE
// {()=>{
//     console.log("hiiii")
// }}



// CALLBACK HELL function

// function sum(a,b){
//     return a+b;

// }
// function sumWIthMsg(clbk,msg){
//     const result=clbk(12,40);
//     console.log("Hiii"+msg+""+result)
// }
// sumWIthMsg(sum,"Ram");



// function login(msg, err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(msg);
//     }
// }

// function loginhandler(clbk) {
//     let username = "ptomer40";
//     let password = "12345";

//     if (username === "ptomer40" && password === "12345") {
//         clbk("success", null);
//     } else {
//         clbk(null, "Username or password is incorrect");
//     }
// }


// loginhandler(login);
// // loginhandler("sonu","123",login);


// setTimeout(() => { console.log("One");
// }, 2000);

// promise

 const myPromise=new Promise((resolve,reject)=>{ // promise return object
    let username="sonu";
    let password="1234";
    if(username=="sonu"&& password=="1234"){
        resolve("success")
    }
    else{
        reject("invalid")
    }
    

})
// console.log(myPromise);
// myPromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("Resource closed"));

 async function orderPrepared(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Order preparred")
        },2000)
    })
 }


async function orderRecieved(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Order Received");
        },2000)
    })
}

async function orderHandOver(){
    return await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("order Handover");
        },3000)
    })

}
let verifyOtp;
function OrderCompleted(){
    console.log("Order sucessfully completed");
function Otp(){ 
    verifyOtp =Math.floor(Math.random() * 10) + 1;
   console.log("verifyOtp")
   if(verifyOtp==8){
    console.log("finally order Completed")
   }
}


async function handleLogin(){
    const status= await myPromise;
    if(status=="success"){
        console.log("Hi ,i am inside sucess");
        const orderRe=await orderRecieved();
        console.log(orderRe);
        const orderPre=await orderPrepared();
        console.log(orderPre);
        const orderCom=await OrderCompleted();
        console.log(orderCom);
        const orderHand=await orderHandOver();
        console.log(orderHand);
    }
    
}
handleLogin();