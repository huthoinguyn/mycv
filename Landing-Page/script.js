const images = document.querySelectorAll(".row-25 .image img");
// console.log(images);

[...images].forEach(item => item.addEventListener("click", handleZoomImage));

function handleZoomImage(event) {
    event.stopPropagation();
    const image = event.target.getAttribute("src");
    const template = `
    <div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img
    src="${image}"
    alt=""
    class="lightbox-image"
    />
    <i class="fa fa-angle-right lightbox-next"></i>
    </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
// document.addEventListener("click",function(event){
//     event.stopPropagation();
//     const lightbox = document.querySelector(".lightbox");
//   if(event.target.matches(".lightbox")){
//       lightbox.parentNode.removeChild(lightbox);
//   }
// });

document.body.addEventListener("click", function (event) {
    const lightImage = document.querySelector(".lightbox-image")
    let lightSrc = "";
    let index = 0;
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex((item) => item.getAttribute("src") === lightSrc);
    if (event.target.matches(".lightbox")) {
        event.target.parentNode.removeChild(event.target);
    } else if (event.target.matches(".lightbox-next")) {
        index++;
        if (index > images.length - 1) {
            index = 0;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
    } else if (event.target.matches(".lightbox-prev")) {
        // lightSrc = lightImage.getAttribute("src");
        // index = [...images].findIndex((item) => item.getAttribute("src") === lightSrc);
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        const newSrc = [...images][index].getAttribute("src");
        lightImage.setAttribute("src", newSrc);
    }
});

// const navItem = document.querySelectorAll(".nav__item");
// console.log("🚀 ~ file: script.js ~ line 59 ~ navItem", navItem)
// [...navItem].forEach(item => item.addEventListener("click",function(event){
//     event.target.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
// }))
