/*Author: Gali Kechichian
 */

const exit = document.getElementById('exit');
const preview = document.getElementById('preview-box');
const pageFilm = document.getElementById('film-overlay');
const wrappers = document.getElementsByClassName('wrapper');
const overlays = document.querySelectorAll('.overlay');
const curImage = document.getElementById('cur-image');
const curCaption = document.getElementById('caption');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

exit.addEventListener('click', ()=> {
    preview.classList.add('gallery');
    pageFilm.classList.add('gallery');
});

overlays.forEach((overlay)=> {
    overlay.addEventListener('click', ()=>{
        preview.classList.remove('gallery');
        pageFilm.classList.remove('gallery');
        openCurImage(overlay);
    });
});

// when you click next, you move on to the next image of the wrapper
// ie, you change the src of the current image in the box
// to that of next one

// 2  things to note:
// whatever image you click, is the one that has to show up
function openCurImage(overlay) {
    curImage.src = overlay.previousElementSibling.src;
    curCaption.innerHTML = overlay.firstElementChild.innerHTML;
}
// prev and next functionality: prev--, next++.
// when you click next, you go to the next element in wrappers,
// grab the image src and update curImage

function findCurImageIndex() {
    let i;
    for (i=0; i < wrappers.length; i++) {
        if (wrappers[i].firstElementChild.src === curImage.src) {
            return i;
        }
    }
    return 0;
}

function goPrevNext(forward) {
    let i = findCurImageIndex();
    
    if (forward) i++;
    else i--;
        
    if (i >= wrappers.length) i=0;
    if (i < 0) i = wrappers.length-1;
    curImage.src = wrappers[i].firstElementChild.src;
    curCaption.innerHTML = wrappers[i].lastElementChild.firstElementChild.innerHTML;
}

// add event listeners to prev and next:
next.addEventListener('click', ()=> {goPrevNext(true);});
prev.addEventListener('click', ()=> {goPrevNext(false)});
