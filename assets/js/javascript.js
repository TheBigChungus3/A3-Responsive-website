// section names
let header = document.querySelector("header");
let burger = document.querySelector(".hamburger-menu");

function centerBurger() {
    var headerHeight = header.offsetHeight;
    var burgerHeight = burger.offsetHeight;    

    var burgerY = (headerHeight/2) - (burgerHeight/2);
    burger.style.top = burgerY + "px";
}

window.addEventListener("load", centerBurger);
window.addEventListener("resize", centerBurger);


// debugging
console.log("header height: ", header.offsetHeight);
console.log("burger height: ", burger.offsetHeight);
console.log("Burger Y (viewport): ", burger.getBoundingClientRect().top, "px");
