$(function () {
    //   /*=================================================
    // トップに戻る
    // ===================================================*/
    let pagetop = $(".to-top");
    pagetop.hide();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });

    pagetop.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });

    //   /*=================================================
    //スムーススクロール
    // ===================================================*/

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 1000, "swing");
        return false;
    });

    //   /*=================================================
    //ハンバーガー
    // ===================================================*/
    $(function () {
        $('.hamburger').on('click', function () {
            $('.sp-nav').fadeToggle();
            $('.hamburger').toggleClass('open');
        });
    });

});