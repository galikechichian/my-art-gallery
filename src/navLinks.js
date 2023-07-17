/* Author: Gali Kechichian 
*/

/**Checks if we're on homepage*/
function atHome() {
    // Looks for an element only present in index.html
    return document.getElementById('featuring');
}

/**For narrower screens:
 * lets the navbar slide on click
 * */
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        navLinks.forEach(
            (link, index)=> {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else    
                link.style.animation = `navLinkFade 0.2s ease forwards ${index/7+ 0.5}s`;
            }
        );
        // burger animation
        burger.classList.toggle('toggle');
    });  
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
        if (viewportPosition <= 180) {
            // change navbar 'active' tag:
            // console.log('tag added');
            navbarElement.classList.add('nav-active');
        }
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
        else window.location.href = '/src/index.html';
    });
}

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
            location.href = '/src/index.html#abt-me'; // Navigate to the homepage after scrolling
        }
        else scrollToAbout();
    });
}


goHome();
goAbout();

navSlide();

activeGalleryContact();

var navbar = document.getElementById('navbar');
var prevScrollPos = window.scrollY;
window.addEventListener('scroll', ()=> {
    onActive();
    var currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    } else {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
});









