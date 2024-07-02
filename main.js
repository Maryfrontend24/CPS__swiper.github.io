var arrowLinkClass = document.querySelector('.arrow-link');

arrowLinkClass.addEventListener('click',  (event) => {
    event.preventDefault();
    let itemsListClass = document.querySelector('.items__list');
    if (itemsListClass.classList.contains('unset-block')&& arrowLinkClass.classList.contains('arrow-link--open')) {
        itemsListClass.classList.remove('unset-block');
        arrowLinkClass.classList.remove('arrow-link--open');
        arrowLinkClass.innerHTML="Показать все";


        return ;
    }
    itemsListClass.classList.add('unset-block');
    arrowLinkClass.classList.add('arrow-link--open');
    arrowLinkClass.innerHTML="Скрыть все";

})






let mql = window.matchMedia('(max-width: 767px)');

window.addEventListener('resize', () => {
    if (mql.matches) {
        let newSwiper = new Swiper('.swiper', {
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 16,
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            freeSwipe: true,
            init: true,

            pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

            controller: {
                invert: true,
            },

        });
    } else {
        swiper.destroy();
    }
})


