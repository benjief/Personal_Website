function setNavBarScroll() {
    $(document).scroll(function () {
        let nav = $(".navbar");
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
}

$(".navbar.scolled").css({"background-color":"#e0e0e0 !important", "transition":"background-color 200ms linear"});