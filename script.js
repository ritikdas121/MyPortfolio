const firstDiv = document.querySelector(".first");
const secondDiv = document.querySelector(".second");
const thirdDiv = document.querySelector(".third");

const firstHeading = document.getElementById("first");
const secondHeading = document.getElementById("second");
const thirdHeading = document.getElementById("third");

firstDiv.addEventListener("mouseover",()=>{
    firstHeading.innerText = "RESUME";
    firstHeading.classList.add("animated");
    firstHeading.classList.add("gradient");
    firstHeading.classList.remove("animated-2");
})

firstDiv.addEventListener("mouseout",()=>{
    firstHeading.innerText = "I";
    firstHeading.classList.remove("animated");
    firstHeading.classList.remove("gradient");
    firstHeading.classList.add("animated-2");
})



secondDiv.addEventListener("mouseover",()=>{
    secondHeading.innerText = "ABOUT";
    secondHeading.classList.add("animated");
    secondHeading.classList.add("gradient");
    secondHeading.classList.remove("animated-2");
})
secondDiv.addEventListener("mouseout",()=>{
    secondHeading.innerText = "AM";
    secondHeading.classList.remove("animated");
    secondHeading.classList.remove("gradient");
    secondHeading.classList.add("animated-2");
})



thirdDiv.addEventListener("mouseover",()=>{
    thirdHeading.innerText = "CONTACT";
    thirdHeading.classList.add("animated");
    thirdHeading.classList.add("gradient");
    thirdHeading.classList.remove("animated-2");
})
thirdDiv.addEventListener("mouseout",()=>{
    thirdHeading.innerText = "RITIK DAS";
    thirdHeading.classList.remove("animated");
    thirdHeading.classList.remove("gradient");
    thirdHeading.classList.add("animated-2");
})



