
function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    //NB outerHeight vs height jquery!
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').outerHeight(),
        heightDocument      = ($('.all-content').position().top) + ($('.all-content').outerHeight()) + ($('footer').outerHeight()) - 20;
    // Size the parallax container (should be content plus footer plus fixed header..)
    $('#scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        scrollFooter(scroll, footerHeight);
    }
});