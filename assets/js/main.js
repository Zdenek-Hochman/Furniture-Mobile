$(document).ready(function() {
    function SetWindow() {
        const width = $(window).width();
        (width > 640) ? $(".nav").appendTo($(".header")) : $(".nav").insertAfter($("header"));
        (width > 640) ? $(".nav__list").css({"display":"flex", "height":"initial"}) : $(".nav__list").css("display","none");
    }

    $(window).on("resize", function() {
        SetWindow();
    })
    SetWindow();

    $(function(){
        const burger = $(".header__burger");
        const nav = $(".nav__list");

        burger.on("click", function(){
            if(nav.height() === 0){
                nav.css('display', 'flex');
                nav.stop().animate({ height: "78vmax", }, 800);
            } else {
                nav.stop().animate({ height: 0 }, 800, function(){nav.css('display', 'none');});
            }
        });
    })
})
