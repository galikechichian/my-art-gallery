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

navSlide();

// To keep active nav links different

const navLinkElements = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkElements.forEach(navLinkE => {
    if (navLinkE.href.includes(windowPathname)) {
        navLinkE.classList.add('nav-active');
    }
});


// about gets 'nav-active' when 

