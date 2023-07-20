/* Author: Gali Kechichian 
*/

/**Checks if we're on homepage*/
function atHome() {
    // Looks for an element only present in index.html
    if (document.getElementById('featuring')) return true;
    return false;
}


/**[mobile navbar] Animates burger icon and navbar*/
function navSlide() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
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

/*
/**Applies navSlide when navigating to home or about
 * 
 * Uses event listener
 *
function navSlideBack() {
    const home = document.getElementById('home-link');
    home.addEventListener('click', navSlide);
    const aboutMe = document.getElementById('about-link');
    aboutMe.addEventListener('click', navSlide);
}
*/


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
 */
function activeGalleryContact() {
    const navLinkElements = document.querySelectorAll('.nav__link');
    const windowPathname = window.location.pathname;
    
    navLinkElements.forEach(navLinkE => {
        if ((windowPathname !== "/") && navLinkE.href.includes(windowPathname)) {
            navLinkE.classList.add('nav-active');
        } else navLinkE.classList.remove('nav-active');
    });    
}


/**Goes to homepage on click 
 * 
 * Uses event listener
*/
function goHome() {
    const homeLink = document.getElementById('home-link');
    homeLink.addEventListener('click', ()=> {
        // [mobile] toggle menu and burger
        if (burger.classList.contains('toggle')) navSlide();
        // if we're already on home, scroll up
        if (atHome()) {
            window.scrollTo({
                top: 0,
                behavior:'smooth'
            });
        }
        // else, go to link
        else {
            window.location.href = 'index.html';
        }
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
 * Uses click event listener
*/
function goAbout() {
    const aboutLink = document.getElementById('about-link');
  
    aboutLink.addEventListener('click', () => {
        // [mobile] toggle menu and burger
        if (burger.classList.contains('toggle')) navSlide();
        
        if (!document.getElementById('featuring')) {
            window.location.href = 'index.html#abt-me'; // Navigate to the homepage after scrolling
        }
        else scrollToAbout();
    });
}

/**Changes 'about' navigation link display
 * when active
 * 
 * Uses scroll event listener
 */
function activeAbout() {
    window.addEventListener('scroll', ()=> {
        onActive();
    });
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

activeGalleryContact();
clickBurger();
activeAbout();
goHome();
goAbout();