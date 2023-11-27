var mainNav = document.querySelector("#navv");
var signInContainer = document.querySelector("#login");

var burgerBtn = document.querySelector("#menu-container button");
var visible = false;

var canYouSeeMainNav = false;

function showNav(){
    // console.log("button clicked");
    if(canYouSeeMainNav === false){
        console.log("show menu");
        // this will add the class of showMainNav to the id mainNav
        mainNav.classList.add("showMainNav");

        signInContainer.classList.add("showSignIn");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        // this will remove the class of showMainNav to the id mainNav
        mainNav.classList.remove("showMainNav");

        signInContainer.classList.remove("showSignIn");

        canYouSeeMainNav = false;
    }
    
}

var signUpModule = document.querySelector("#sign-up-container");

function closeModal(){
    signUpModule.classList.remove("show-signUp-container");
}

function showModal() {
    signUpModule.classList.add("show-signUp-container");
    mainNav.classList.remove("showMainNav");
    signInContainer.classList.remove("showSignIn");
 }

