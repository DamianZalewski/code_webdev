let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})

// -----------

const recordVideo1 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Video 1 Recorded')}, 3000);
})

const recordVideo2 = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideo3 = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message) => {
    console.log(message);
})

Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message) => {
    console.log(message);
})