
function scrollFooter(scrollY, heightFooter)
{
    // place footer where it supposed to be
    if(scrollY >= heightFooter)
    {
        $('footer').css({
             '-ms-transform' : 'translateY(-' + heightFooter + 'px)', 
             '-webkit-transform' : 'translateY(-' + heightFooter + 'px)',
             'transform' : 'translateY(-' + heightFooter + 'px)'
        });      
    }
    else
    {
        $('footer').css({
             '-ms-transform' : 'translateY(0)',
             '-webkit-transform' : 'translateY(0)',
             'transform' : 'translateY(0)'
        });
    }
};

function isTouchDevice(){
    var deviceAgent = navigator.userAgent.toLowerCase();

    var isTouchDevice = ('ontouchstart' in document.documentElement) || 
    (deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/)  || 
    deviceAgent.match(/(iemobile)/) || 
    deviceAgent.match(/iphone/i) || 
    deviceAgent.match(/ipad/i) || 
    deviceAgent.match(/ipod/i) || 
    deviceAgent.match(/blackberry/i) || 
    deviceAgent.match(/bada/i));

    return isTouchDevice;

};

function initParallax(){
    //trigger recalculation
    document.body.style.visibility = "visible";
    // if not touch device, enable easing on scroll because it doesn't work well for touch
      if (!isTouchDevice()) {
            console.log("not touch");
            $('#scroll-animate-main').addClass('smooth-scroll');
            $('footer').addClass('smooth-scroll');
            $('.header-inner').addClass('smooth-scroll');
        } else {
            console.log("touch");
        };


    //NB outerHeight vs height and .offset vs .position jquery!
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').outerHeight(),
        heightDocument      = ($('.all-content').offset().top) + ($('.all-content').outerHeight()) + ($('footer').outerHeight()) - 20;
    // Size the parallax container (should be content plus footer plus fixed header..)
    $('#scroll-animate-main, #scroll-animate').css({
        'height' :  heightDocument + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // scroll the content over the footer
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('.header-inner').css({
            '-ms-transform' : 'translateY(' + -(scroll * 100)/heightDocument + '%)',
            '-webkit-transform' : 'translateY(' + -(scroll * 100)/heightDocument + '%)',
            'transform' : 'translateY(' + -(scroll * 100)/heightDocument + '%)',
            'opacity' : 1 - 1.5*(scroll/windowHeight)
        });

        $('#scroll-animate-main').css({
            '-ms-transform' : 'translateY(-' + scroll + 'px)',
            '-webkit-transform' : 'translateY(-' + scroll + 'px)',
            'transform' : 'translateY(-' + scroll + 'px)'
        });

        scrollFooter(scroll, footerHeight);
    }
};

$(window).load(function(){
    initParallax();
});

window.addEventListener('orientationchange', initParallax);
