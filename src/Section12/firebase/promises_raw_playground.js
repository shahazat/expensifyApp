
//promise is used for long running async tasks.
//if long running task, we have a choice to inform caller that if it succeeded or not,
//resolve is called on success, reject on fail
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=> {

        resolve('This is my resolved data');
        // reject('Reject');

    }, 1500);
});
console.log('before');

//register 2 separate callbacks
promise.then((data)=>{
    console.log('First One',data);
}).catch((data)=>{
    console.log('error',data);
});

//or U can pass reject s second argument
promise.then((data)=>{
    console.log('Second One',data);
}, (data)=>{
    console.log('error Second method',data);
});

//it is also possible to chain `then` callbacks 
//and return value of a predecessor is passed to successor
promise.then((data)=>{
    console.log('First One',data);
    return 'Mash Gholam Ali';
}).then((that)=>{
    console.log(that, 'is really passed in ');

}).catch((data)=>{
    console.log('error',data);
});
console.log('after');
