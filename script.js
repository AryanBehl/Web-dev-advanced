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

function finishHomework(callback) {
    console.log("Starting Homework......");
    setTimeout(() => {
        console.log("Homework Done!");
        callback();
    }, 2000);
}

function eatDinner(callback) {
    console.log("Starting Dinner...");
    setTimeout(() => {
        console.log("Dinner Done!");
        callback();
    }, 1500);
}

function goToPlayground() {
    console.log("Going to the playground!");
}

//  Chained in steps, but cleaner
finishHomework(() => {
    eatDinner(() => {
        goToPlayground();
    });
});

