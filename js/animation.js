// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

(function (){
    let $target = $(".anime");
    let animationClass = 'anime-start';
    let offset = $(window).height() * 3/4;

    $(document).scroll(debounce(function() {
        animeScroll();
    }, 50));

    animeScroll();

    function animeScroll() {
        let documentTop = $(document).scrollTop();
        
        $target.each(function() {
            let itemTop = $(this).offset().top;
            if(documentTop > itemTop - offset){
                $(this).addClass(animationClass);
            }else{
                $(this).removeClass(animationClass);
            }
        })
    }
}());

(function(){
    let swip = $(".swiper-container");
    let offset = $(window).height() * 3/4;

    $(document).scroll(debounce(function(){
        animeSwiper();
    }, 50));

    animeSwiper();

    function animeSwiper(){
        let docTop = $(this).scrollTop();

        swip.each(function() {
            let itemTop = $(this).offset().top;
            if(docTop > itemTop - offset){
                swiper.autoplay.start();
            }else{
                swiper.autoplay.stop();
            }
        })
    }
})();