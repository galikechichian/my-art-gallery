/* Author: Gali Kechichian 
*/

/**Checks if we're on homepage*/
function atHome() {
    // Looks for an element only present in index.html
    return document.getElementById('featuring');
}


/**[mobile navbar] Animates burger icon and navbar*/
function navSlide() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    navbar.classList.toggle('open');
    navLinks.forEach((link, index)=> {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else    
        link.style.animation = `navLinkFade 0.2s ease forwards ${index/5+ 0.2}s`;
    });
}


/**Applies navSlide when burger icon is clicked
 * 
 * Uses event listener
 */
function clickBurger() {burger.addEventListener('click', navSlide)}


/**Applies navSlide when navigating to home or about
 * 
 * Uses event listener
 */
function navSlideBack() {
    const home = document.getElementById('home-link');
    home.addEventListener('click', navSlide);
    const aboutMe = document.getElementById('about-link');
    aboutMe.addEventListener('click', navSlide);
}


/**Updates classlist of 'about' nav link
 * depending on 'about me's position relative to the viewport
 */
function onActive() {
    // check that we're in home
    if (atHome()) {
        const navbarElement = document.getElementById('about-link');
        const aboutSection = document.getElementById('abt-me');
        const viewportPosition = aboutSection.getBoundingClientRect().top;
        
        if (viewportPosition <= 180) navbarElement.classList.add('nav-active');
        else navbarElement.classList.remove('nav-active');
    }
}


/**Updates classlist of 'gallery'  and 'contact' nav links
 * as the user scrolls
 */
function activeGalleryContact() {
    const navLinkElements = document.querySelectorAll('.nav__link');
    const windowPathname = window.location.pathname;
    
    navLinkElements.forEach(navLinkE => {
        if (navLinkE.href.includes(windowPathname)) {
            navLinkE.classList.add('nav-active');
        }
    });    
}


/**Goes to homepage on click 
 * 
 * Uses event listener
*/
function goHome() {
    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', ()=> {
        // if we're already on home, scroll up
        if (atHome()) {
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            });
        }
        // else, go to link
        else window.location.href = 'index.html';
    });
}


/**Scrolls to where about section is visible */
function scrollToAbout() {
    // scroll to about section in homepage
    const section = document.getElementById('abt-me');
    section.scrollIntoView({behavior: 'smooth'});
}

/**Goes to 'about me' on click
 * 
 * Uses event listener
*/
function goAbout() {
    const aboutLink = document.getElementById('about-link');
  
    aboutLink.addEventListener('click', () => {
        if (!document.getElementById('featuring')) {
            location.href = 'index.html#abt-me'; // Navigate to the homepage after scrolling
        }
        else scrollToAbout();
    });
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

goHome();
goAbout();
clickBurger();
navSlideBack();
activeGalleryContact();

/*
var navbar = document.getElementById('navbar');
var prevScrollPos = window.scrollY;
window.addEventListener('scroll', ()=> {
    onActive();
    if (navbar.classList.contains('open')) {
        navbar.classList.remove('hidden');
        navbar.style.position='fixed';
    }
    else {
        var currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos || window.scrollY < 3) {
            // Scrolling up, show the navbar
            navbar.classList.remove('hidden');
        } else {
            // Scrolling down, hide the navbar
            navbar.classList.add('hidden');
        }
        prevScrollPos = currentScrollPos;
    }
});
*/