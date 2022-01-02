const mrngwakeup=new Promise((resolve,reject)=>{
    const sleptearly=true;
    if(sleptearly){
        resolve('Woke up')
    }
    else{
        reject('slept')
    }
    
});
mrngwakeup
.then((response)=>{
    console.log(response)
    const brushed=true
    console.log('brush your teeth');
    return brushed
})
.then((brushed)=>{
    if(brushed){
    const bath=false
    console.log('take a shower');
    return bath
    }
}).catch((err)=>{
    console.log(err)
});

