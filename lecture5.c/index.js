let p=new Promise((resolve,reject)=>{
    let age=18;
    if(age>18) return resolve("you are eligible to vote")
        reject("you are not eligible to vote")
})

p
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("hi");
console.log("ok");
function add();