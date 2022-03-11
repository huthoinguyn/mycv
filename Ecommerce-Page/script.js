window.addEventListener("load",function(){
const links = [...document.querySelectorAll(".nav__item")];
links.forEach(item => item.addEventListener("mouseenter", handleHoverLinks));
const line = document.createElement("div");
document.body.appendChild(line);
line.className = "line-effect";
function handleHoverLinks(event){
const{width, height, left, top} = event.target.getBoundingClientRect();
// line.style = `width: ${width}px; height: 2px; left: ${left}px; background-color: blue; positions: fixed; transition: all 0.25s linear`;
line.style.top = `${top + height + 12}px`;
line.style.width = `${width}px`;
line.style.left = `${left}px`;
}
links.forEach(item => item.addEventListener("mouseleave", handleLeave));
function handleLeave(event){
    line.style.width = 0;
}
});
let productImage = document.querySelector(".product__img");
productImage.getAttribute("src");
// const images = [...document.querySelectorAll(".image")];
// const blurImage = document.createElement("div");
// blurImage.className = "blur__img";
// [...images].appendChild(blurImage);

const imgs = [...document.querySelectorAll(".img")];
imgs.forEach(item => item.addEventListener("click",function(event){
event.target.style = `border: 3px solid #ff6800`;
const imageSrc = event.target.getAttribute("src");
productImage.setAttribute(imageSrc);
const blurImage = document.querySelectorAll(".blur__img");
blurImage.classList.add("active__img");

}));
const minusBtn = document.querySelector(".counter-descrease");
const plusBtn = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);
plusBtn.addEventListener("click",function(event){
    counterValue++;
    counterNumber.textContent = counterValue;
    // console.log("🚀 ~ file: starter.js ~ line 8 ~ plusBtn.addEventListener ~ counterValue", counterValue)
});
minusBtn.addEventListener("click",function(event){
    if(counterValue <= 0){
        return 0;
    };
    counterValue--;
    counterNumber.textContent = counterValue;
});
// =================
const menuIcon = document.querySelector(".nav__icon");
const nav = document.querySelector(".nav");
const closeIcon = document.querySelector(".close__icon");
const body = document.querySelector("body");
// console.log(menuIcon);
menuIcon.addEventListener("click",function(){
nav.style = `width: 60%; visibility: visible;`;
closeIcon.style.visibility = "visible";

// closeIcon.style.transform = "scale(1.1)";
});
closeIcon.addEventListener("click",function(){
    // nav.classList.remove("active");
    nav.style = `width: 0; visibility: hidden;`;
    closeIcon.style.visibility = "hidden";
});
// body.addEventListener("click",function(){
//     nav.style = `width: 0; visibility: hidden;`;
// });
