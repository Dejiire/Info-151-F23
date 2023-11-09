var mainNav = document.querySelector("#navv");

var hamburger = document.querySelector("#menu-container button");
var visible = false;

function showNav(){
    console.log("hi");
    if(visible == true){
        mainNav.classList.remove("showMainNav");
        visible = false
    } else {
        mainNav.classList.add("showMainNav");
        visible = true
    }
    
}
