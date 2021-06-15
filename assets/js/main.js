/* ==========================  MENU SHOW Y HIDDEN ======================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ============ Menu Show ============*/
/* Validate if constanst exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-me')
    })
}

/* ============ Menu Hidden ============*/
/* Validate if constanst exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-me')
    })
}

/* ============ Remove Menu Mobile ============*/
// removes menu once an option is choosen from menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
