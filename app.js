const menu= document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//Display mobile menu

const mobileMenu=() =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

};

menu.addEventListner('click',mobileMenu);

const highlightMenu = () =>{
    const elem =document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    //console.log(scrollPos);
}

if(window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('hightlight')
    aboutMenu.classList.remove('highlight')
    return  
}
else if(window.innerWidth > 960 && scrollPos < 1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('hightlight')
    servicesMenu.classList.remove('highlight')
    return
}
else if(window.innerWidth > 960 && scrollPos < 2345){
    servicesMenu.classList.add('highlight') 
    aboutMenu.classList.remove('highlight')
    return
}

if((elem && window.innerWidth <960 && scrollPos < 600) || elem){
    elem.classList.remove('highlight')
}

window.addEventListner('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classlist.toggle('is-active')
        menuLinks.classList.remove('active')
    }

}

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);

