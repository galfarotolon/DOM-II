// Your code goes here

//Header img 

const headerImg = document.querySelector("header img")


headerImg.addEventListener("mouseenter", function () {

    headerImg.src = "img/fun-bus-blackwhite.jpg"
});

headerImg.addEventListener("mouseleave", function () {

    headerImg.src = "img/fun-bus.jpg"
});