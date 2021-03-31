var swiper = new Swiper(".swiper-container", {
    direction: 'horizontal',
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 100,
        stretch: -50,
        depth: 1000,
        modifier: 2,
        slideShadows: true,
    },
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
