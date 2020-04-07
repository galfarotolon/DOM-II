// Your code goes here

//////H1 click event 1

let mainHeader = document.querySelector("h1")

mainHeader.addEventListener("click", function () {

    if (mainHeader.innerHTML === "Sad Bus") {
        mainHeader.innerHTML = "Fun Bus";
        mainHeader.style.color = "yellow"

    } else {
        mainHeader.innerHTML = "Sad Bus";
        mainHeader.style.color = "purple"
    }
})

//H1 mouseover event 2
mainHeader.addEventListener("mouseover", function () {

    mainHeader.style.fontSize = "9rem"
    mainHeader.style.fontWeight = "900"
    mainHeader.style.color = "yellow"
    mainHeader.style.transition = "1.5s"
})

//h1 mouseout event 3

mainHeader.addEventListener("mouseout", function () {

    mainHeader.style.fontSize = "4rem"
    mainHeader.style.fontWeight = "400"
    mainHeader.style.color = "black"

})


////NAV BAR//////

//Double click Event 4

const navLinks = document.querySelectorAll("nav a")

navLinks[0].addEventListener("dblclick", function () {

    navLinks[0].innerText = "Do"

})

navLinks[1].addEventListener("dblclick", function () {

    navLinks[1].innerText = "Not"

})


navLinks[2].addEventListener("dblclick", function () {

    navLinks[2].innerText = "Travel"

})

navLinks[3].addEventListener("dblclick", function () {

    navLinks[3].innerText = "Now"

})





////////////Header img//////////////////////

const headerImg = document.querySelector("header img")

//mouse enter event 5
headerImg.addEventListener("mouseenter", function () {

    headerImg.src = "img/fun-bus-blackwhite.jpg"


});

//mouse leave event 6

// headerImg.addEventListener("mouseleave", function () {

//     headerImg.src = "img/fun-bus.jpg"
// });



////h2 and h4 keydown event 7///////

const h2s = document.querySelectorAll("h2")
const h4s = document.querySelectorAll("h4")

function sadKey(event) {

    if (event.key === 's') {
        h2s[0].innerText = "Welcome to Sad Bus!"
        h2s[1].innerText = "Let's NOT Go!"
        h2s[2].innerText = "Stay at Home Please"
        h2s[3].innerText = "Pick your favorite Room"
        //h4 
        h4s[0].innerText = "Fun in the Bathroom"
        h4s[1].innerText = "Kitchen Excursion"
        h4s[2].innerText = "Living Room Getaway"



    } else if (event.key === "f") {

        h2s[0].innerText = "Welcome to Fun Bus!"
        h2s[1].innerText = "Let's Go!"
        h2s[2].innerText = "Adventure Awaits"
        h2s[3].innerText = "Pick your Destination"
        //h4
        h4s[0].innerText = "Fun in the Sun"
        h4s[1].innerText = "Mountain Excursion"
        h4s[2].innerText = "Island Getaway"


    }
}

document.addEventListener("keydown", sadKey)