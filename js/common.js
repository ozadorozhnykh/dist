jQuery.noConflict();
(function ($) {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },

            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }
            });
    });
})(jQuery);


//Scroll2Id

(function ($) {
    $(window).on("load", function () {
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
            scrollSpeed: 1000,
            scrollEasing: "easeInOutQuint"
        });

    });
})(jQuery);

Typed.new(".about__text__span", {
    strings: ["Я <span>HTML-coder</span> и <span>фотограф энтузиаст</span>. Свой первый практический опыт работы с кодом я получил при создании своей темы для блога на Тumblr. Я как сейчас помню как тратил часы на изменение его внешнего вида и структуры. Сейчас для меня это просто, как конструктор Lego. Вы начинаете делать кубики, и никто не понимает что из этого будет и в конце та да ... и у вас вконце все готово."],
    typeSpeed: 70,

});
