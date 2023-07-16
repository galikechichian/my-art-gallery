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

/**Updates classlist of 'about' nav link
 * as the user scrolls
 */
function activeAbout() {window.addEventListener('scroll', onActive)}

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

/**Goes to homepage on click */
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

/**Goes to 'about me' on click*/
function goAbout() {
    /* Issue to fix: when going from a different page
    click is only changing the document to home and a new script is running
    that's why it can't scroll down once it reaches home. 
    No exceptions thrown, but got a logical error to fix 
    */
    if (!document.getElementById('featuring')) {
        document.getElementById('about-link').href='/src/index.html';
    }
    else {
        const aboutLink = document.getElementById('about-link')
        aboutLink.addEventListener('click', () => {
        
            // scroll to its location
            const section = document.getElementById('abt-me');
            const scrollLocation = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: scrollLocation,
                behavior: 'auto'
            });
        });
    }
}


goHome();
goAbout();

navSlide();

activeGalleryContact();
activeAbout();




