let counter = 0
let counterValue = document.getElementById("value")
// let decreaseBtn = document.querySelector("btn-decrease")
// let resetBtn = document.querySelector("btn-reset")
// let increaseBtn = document.querySelector("btn-decrease")
let buttons = document.querySelectorAll(".btn")


buttons.forEach(button=> {
    if(button.className.includes("btn-decrease")) {
        button.addEventListener("click",()=>{
            counterValue.innerText = --counter
        })
    }
    else if(button.className.includes("btn-increase")) {
        button.addEventListener("click",()=>{
            counterValue.innerText = ++counter
        })
    }
    else if(button.className.includes("btn-reset")) {
        button.addEventListener("click",()=>{
            counter = 0;
            counterValue.innerText = counter
        })
    }
})
