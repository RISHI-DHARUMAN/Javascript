    //synchronous
    console.log("step 1");
    console.log("step 2");
    console.log("step 3");
    
    //Asynchronous
    setTimeout(()=>console.log("step 1"),1000);
    setTimeout(()=>console.log("step 2"),500);
    setTimeout(()=>console.log("step 3"),10);
    console.log("step 4");


    //promise

    const trainticket = new Promise((resolve,reject)=>{
        let bookingsuccess=true;
    if(bookingsuccess)
    {
        resolve()
    }
    else
    {
        reject()
    }
    })
    trainticket.then(()=>console.log("your ticket was booked sucesfully"));
    trainticket.catch(()=>console.log("your ticket was not booked sucesfully"));

    function tosscoin()
    {
        return new Promise((resolve,reject)=>{
            let toss=Math.floor(Math.random()*2)
            if(toss==0)
            resolve()
            else
            reject()
        })
    }
     tosscoin()
    .then(()=>console.log("Head"))
    .catch(()=>console.log("Tail"));

    function coin1()
    {
        return new Promise((resolve,reject)=>{
            let toss=true
            if(toss)
            resolve("Head")
            else
            reject("Tail")
        })
    }
    function coin2()
    {
        return new Promise((resolve,reject)=>{
            let toss=false
            if(toss)
            resolve("Head")
            else
            reject("Tail")
        })
    }
    //promiseall
    Promise.all([coin1,coin2])
    .then((message)=>console.log(message))
    .catch((message)=>console.log(message));
    //promiseallseteled
    Promise.allSettled([coin1,coin2])
    .then((message)=>console.log(message))
    .catch((message)=>console.log(message));
    //promiseany
    Promise.any([coin1,coin2])
    .then((message)=>console.log(message))
    .catch((message)=>console.log(message));
    //promiserace
    Promise.race([coin1,coin2])
    .then((message)=>console.log(message))
    .catch((message)=>console.log(message));