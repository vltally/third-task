const advertisement_btn = document.querySelector(".close-btn");
const advertisement = document.querySelector(".advertisement");
const header = document.querySelector(".header");

advertisement_btn.addEventListener("click",function(){
    advertisement.style.display = 'none';
    header.classList.add('top');
    document.querySelector(".browse-bands").classList.add('top');
   
});


const iconMenu = document.querySelector('.burger-icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('_lock');   
        iconMenu.classList.toggle('_active');
        header.classList.toggle('_active');
        header.classList.add('top');
        document.querySelector(".advertisement").classList.add('top');
    });
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    touchRation: 1.5,
    watchOverflow: true,
    // simulateTouch:false,
    spaceBetween: 20,
    slidesPerGroup: 1,

    breakpoints: {
        360:{
            spaceBetween: 30
        },
        1029:{
            spaceBetween: 20
        }
    }
});