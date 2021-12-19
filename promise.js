
let a=5
let b=10
for(let i=a;i<b;i++){
    console.log(i)
}
function callbacksuccess(val){
    console.log("success"+val)
}
function callbackfailure(val){
    console.log("failure"+val)
}

let promise=new Promise(function(resolve, reject){
    //fetching data from db(long operation)
    //throw new Error("myerrfun");
    setTimeout(()=>{
        resolve("VCE")
    },5000)

}).then(callbacksuccess).catch(callbackfailure)

let c=15
for(let i=b;i<c;i++){
    console.log(i)
}
