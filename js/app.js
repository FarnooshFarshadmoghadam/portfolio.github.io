// backToTop
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})

//sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

const tabMenu = document.querySelector('#tab_btn').children;
const items = document.querySelector('.portfolio_gallery').children;

for (i = 0; i < tabMenu.length; i++) {
    tabMenu[i].addEventListener('click', function() {
        for (let j = 0; j < tabMenu.length; j++) {
            tabMenu[j].classList.remove('active')
        }
        this.classList.add('active');
        const target = this.getAttribute('data-target');

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            if (target == items[k].getAttribute('data-id')) {
                items[k].style.display = 'block'
            }
            if (target == 'all') {
                items[k].style.display = 'block'
            }
        }
    })
}

//lightbox
const closeLightbox = document.querySelector('.close_lightbox');
const lightbox = document.querySelector('.lightbox');
const lightboximage = lightbox.querySelector('img');


lightbox.addEventListener('click', function() {
    if (event.target != lightboximage) {
        lightbox.classList.remove('show');
        lightbox.classList.add('hide');
    }
})

console.log(lightboximage)
closeLightbox.addEventListener('click', function() {
    lightbox.classList.add('hide');
    lightbox.classList.remove('show');
})

const gallery = document.querySelector('.portfolio_gallery');
const galleryItem = gallery.querySelectorAll('.portfolio_gallery_item')

galleryItem.forEach((element) => {
    element.querySelector('.portfolio_gallery_item_inner').addEventListener('click', function() {
        lightbox.classList.add('show');
        lightbox.classList.remove('hide');
        lightboximage.src = element.querySelector('img').getAttribute('src');
    })

})