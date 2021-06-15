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