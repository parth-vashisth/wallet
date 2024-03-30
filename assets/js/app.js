const switch1 = document.querySelector(".switch");
const switchbtn = document.querySelector(".switch-btn");

switch1.addEventListener("click", function () {
    switchbtn.classList.toggle("switch-btn-right");
    switch1.classList.toggle("switch-right")
})


let menuicon = document.querySelector(".menuicon");
let lg_view = document.querySelector(".lg_view");
menuicon.addEventListener("click", () => {
    lg_view.classList.toggle("show");
});