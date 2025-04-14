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
