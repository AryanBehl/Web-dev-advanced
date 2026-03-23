// const para=document.querySelector(".para")
// para[0].textContent="This is updated para"
// para[1].style.color="blue"
// console.log(para)

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")

// function show(){
//     alert('You have clicked the button!')
// }

// button.addEventListener('mouseover', show)

// const btn=document.querySelector("#btn")
// const stop=document.querySelector("#stop")

// btn.addEventListener('click', show)
// stop.addEventListener('click', function(){
// btn.removeEventListener('click', show)
// })

// btn.addEventListener('keyup', (event)=>{
//     console.log(event.key)
// })

// const form=document.querySelector("form")
// form.addEventListener('submit', (event)=>{
//     event.preventDefault()
//     console.log("button clicked")
// })

// var a=3453
// let b=456;
// console.log(a)
// console.log(b)

// function print(){
//     console.log("Inside Function")
// }

// print()

// const studentname=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',()=>{
//     //creating element
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')

//     //providing the element
//     dlt.innerText="Delete";
//     li.innerText=studentname.value;

//     dlt.addEventListener('click',()=>{
//         list.removeChild(li)
//     })

//     //appending the element
//     list.appendChild(li)
//     li.appendChild(dlt)

//     //clearing text
//     studentname.value=""

// })

// CALLBACK FUNCTION:

// console.log("Starting Homework....");

// setTimeout(() => {
//     console.log("Homework Done!");
//     console.log("Starting dinner.....");

//     setTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out.....");

//         setTimeout(() => {
//             console.log("Going to the Playground: ");
//         }, 1000); // after dinner
//     }, 1500); // dinner time
// }, 2000); // homework time

// function finishHomework(callback) {
//     console.log("Starting Homework......");
//     setTimeout(() => {
//         console.log("Homework Done!");
//         callback();
//     }, 2000);
// }

// function eatDinner(callback) {
//     console.log("Starting Dinner...");
//     setTimeout(() => {
//         console.log("Dinner Done!");
//         callback();
//     }, 1500);
// }

// function goToPlayground() {
//     console.log("Going to the playground!");
// }

// //  Chained in steps, but cleaner
// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// });

// const p= new Promise((res,rej)=>{
//     console.log("Going to do the Homework")

//     setTimeout(()=>{
//         const done=true;
//         if(done){
//             res("Success")
//         }
//         else{
//             rej("Failed to fetch data from the server")
//         }
//     },3000)
// })
// p.then((a)=>{
//    console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

// function doHomework() {
//     const p=new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if(done){
//                 console.log("Homework complete!")
//                 res("Homework done!")
//             }
//             else{
//                 rej("Homework not done!")
//             }
//         }, 2000)
//     })
//     return p;
// }

// function eatDinner() {
//     const p=new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if(done){
//                 console.log("Dinner complete!")
//                 res("Dinner done!")
//             }
//             else{
//                 rej("Dinner not done!")
//             }
//         }, 2000)
//     })
//     return p;
// }

// doHomework().then((data) => {
//     console.log(data)
// })
// eatDinner().then((data) => {
//     console.log(data)
// })

// const response =  await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//      method: "POST" ,
//      headers : { 
//         "Content-Type" : "application/json"
//      },
//         body: JSON.stringify({
//             title: "foo",
//             body: "bar",
//             userId: 1
//         }) 
//     })
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }   

// const data = await response.json()
// console.log(data)

// let obj={
//     name:"John",
//     age:30,   
// }

// localStorage.setItem("obj",JSON.stringify(obj))


// localStorage.setItem("name","John")
// localStorage.setItem("age",30)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// localStorage.removeItem("age")
// localStorage.clear() //clear everything in local storage

// sessionStorage.setItem("name","John")
// sessionStorage.setItem("age",30)

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("age")
// sessionStorage.clear() //clear everything in session storage

// document.cookie="name=John; expires=Fri, 20 FEB 2026 23:59:59 UTC;"
// document.cookie="age=30; expires=Fri, 18 FEB 2026 23:59:59 UTC;"


// async function sample(){
//     await fetch("http://127.0.0.1:5500/webdev.html")
// }
// sample()

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4 
// }
    

// const res=generate()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())

// // function add(a, b, c) {
// //     return a + b + c
// // }
// // console.log(add(2, 3, 4))

// async function getweather() {
    
// }