/* Author: Gali Kechichian 
*/

/** For narrower screens:
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

/** Updates classlist of 'about' nav link
 * depending on 'about me's position relative to the viewport
 */
function onActive() {
    // check that we're in home
    if (document.getElementById('featuring')) {
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

/** updates classlist of 'about' nav link
 * as the user scrolls
 */
function activeAbout() {
    window.addEventListener('scroll', onActive);
}

function activeGalleryContact() {
    const navLinkElements = document.querySelectorAll('.nav__link');
    const windowPathname = window.location.pathname;
    
    navLinkElements.forEach(navLinkE => {
        if (navLinkE.href.includes(windowPathname)) {
            navLinkE.classList.add('nav-active');
        }
    });    
}


activeGalleryContact();
activeAbout();

navSlide();




