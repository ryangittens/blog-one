
function scrollFooter(scrollY, heightFooter)
{
    // place footer where it supposed to be
    if(scrollY >= heightFooter)
    {
        $('footer').css({
             'transform' : 'translateY(-' + heightFooter + 'px)'
        });      
    }
    else
    {
        $('footer').css({
             'transform' : 'translateY(0)'
        });
    }
}

$(window).load(function(){
    //NB outerHeight vs height and .offset vs .position jquery!
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').outerHeight(),
        heightDocument      = ($('.all-content').offset().top) + ($('.all-content').outerHeight()) + ($('footer').outerHeight()) - 20;
    // Size the parallax container (should be content plus footer plus fixed header..)
    console.log(heightDocument)
    $('#scroll-animate-main, #scroll-animate').css({
        'height' :  heightDocument + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // scroll the content over the footer
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'transform' : 'translateY(-' + scroll + 'px)'
        });

        scrollFooter(scroll, footerHeight);
    }
});
