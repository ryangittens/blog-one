
function scrollFooter(scrollY, heightFooter)
{
    // place footer where it supposed to be
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
             'transform' : 'translate(0, -' + heightFooter + 'px)'
        });      
    }
    else
    {
        $('footer').css({
             'transform' : 'translate(0, 0)'
        });
    }
}

$(window).load(function(){
    //NB outerHeight vs height jquery!
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').outerHeight(),
        heightDocument      = ($('.all-content').position().top) + ($('.all-content').outerHeight()) + ($('footer').outerHeight()) - 20;
    // Size the parallax container (should be content plus footer plus fixed header..)
    $('#scroll-animate-main, #scroll-animate').css({
        'height' :  heightDocument + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // scroll the content over the footer
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'transform' : 'translate(0, -' + scroll + 'px)'
        });

        scrollFooter(scroll, footerHeight);
    }
});
