console.log("wellcome to rocket animation");

// for navbar only
navbar = document.querySelector(".navbar-toggle");
burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
    navbar.classList.toggle("h-nav-res");
})
// for navbar only

// variables used
let rocket1 = document.querySelector(".rocket1");
let rocket2 = document.querySelector(".rocket2");
let rocket3 = document.querySelector(".rocket3");
let secondSection = document.querySelector(".secondSection");
let target = document.querySelector(".target");
let ctaBtn = document.querySelector(".ctaBtn");

// animation functions
let animation = () => {
    anime({
        targets: rocket1,
        translateX: 380,
        direction: 'alternate',
        easing: 'linear',
        duration: 200
    });
}
let animation2 = () => {
    anime({
        targets: rocket2,
        translateX: 380,
        direction: 'alternate',
        easing: 'linear',
        duration: 200
    });
}
let animation3 = () => {
    anime({
        targets: rocket3,
        translateX: 380,
        direction: 'alternate',
        easing: 'linear',
        duration: 200
    });
}

// changing the background of second section
let changeBackground1 = () => {
    let secondSection = document.querySelector(".secondSection");
    secondSection.classList.remove("background");
    secondSection.classList.add("background1");
    target.style.color = "white";
}
let changeBackground2 = () => {
    let secondSection = document.querySelector(".secondSection");
    secondSection.classList.remove("background");
    secondSection.classList.add("background2");
    target.style.color = "white";
}
let changeBackground3 = () => {
    let secondSection = document.querySelector(".secondSection");
    secondSection.classList.remove("background");
    secondSection.classList.add("background3");
    target.style.color = "white";
}

// displaying three rockets one after anathor
let rocket1Display = () => {
    rocket1.style.display = "none";
}
let rocket2Display = () => {
    rocket2.style.display = "block";
}
let rocket2DisplayNone = () => {
    rocket2.style.display = "none";
}
let rocket3Display = () => {
    rocket3.style.display = "block";
}

// reset the background
let resetDefaults = () => {
    rocket3.style.display = "none";
    secondSection.classList.remove("background3");
    secondSection.classList.remove("background2");
    secondSection.classList.remove("background1");
    secondSection.classList.add("background");
}

// using jquery to selecting elements
$("#rocket1").click(function () {
    animation();
    setTimeout(changeBackground1, 130);
    setTimeout(rocket1Display, 600);
    setTimeout(rocket2Display, 650);
})
$("#rocket2").click(function () {
    animation2();
    setTimeout(changeBackground2, 130);
    setTimeout(rocket2DisplayNone, 600);
    setTimeout(rocket3Display, 650);
})
$("#rocket3").click(function () {
    animation3();
    setTimeout(changeBackground3, 130);
    setTimeout(resetDefaults, 1000);
})