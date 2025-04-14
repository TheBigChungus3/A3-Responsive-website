// section names
let header = document.querySelector("header");
let burger = document.querySelector(".hamburger-menu");
let navHead = document.querySelector("#nav-head");

var maxW = window.matchMedia("(max-width: 820px)");

function centerBurger() {

    var headerHeight = header.offsetHeight;
    var burgerHeight = burger.offsetHeight;

    var burgerY = (headerHeight/2) - (burgerHeight/2);
    burger.style.top = burgerY + "px";

    console.log("1 header height: ", header.offsetHeight);
    console.log("1 burger height: ", burger.offsetHeight);
    console.log("1 burger y: ", burgerY);
    console.log("1 Burger y (viewport): ", burger.getBoundingClientRect().top, "px");
}

function phoneNavPad(maxW) {

    var headerHeight = header.offsetHeight;
    // var burgerHeight = burger.offsetHeight;
    var navPadTop = headerHeight;
    var navPadBottom = navPadTop / 1.5;

    if (maxW.matches) {
        // padding for the phone nav under burger menu
        navHead.style.paddingTop = navPadTop + "px";
        navHead.style.paddingBottom = navPadBottom + "px";
    }
    else {
        // padding
        navHead.style.paddingTop = "";
        navHead.style.paddingBottom = "";
    }
    console.log("1 head navPad: ", navPadTop);
}

phoneNavPad(maxW);

window.addEventListener("load", centerBurger);
window.addEventListener("resize", centerBurger);
maxW.addEventListener("change", function() {
    phoneNavPad(maxW);
});


// debugging
console.log("2 header height: ", header.offsetHeight);
console.log("2 burger height: ", burger.offsetHeight);
// console.log("2 burger y: ", burgerY);
console.log("2 Burger y (viewport): ", burger.getBoundingClientRect().top, "px");
