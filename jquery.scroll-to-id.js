/* Аналог window.onload - $(function () {}); */

$(function () {
    
    $('.js-scroll-to-id').click(function (event) {
        event.preventDefault();
        /**
         * Получает селектор `id`
         */
        var selector = $(this).attr('href');

        /* Высота Navbar'a */
        var navHeight = $('.nav').outerHeight();

        /**
         * Получает расстояние до нужного блока
         */
        var offsetTop = $(selector).offset().top - navHeight;

        /**
         * Анимирует переход (скрол) до нужного блока
         */
        $('html').stop(true).animate({ scrollTop: offsetTop }, 300);
    });

});