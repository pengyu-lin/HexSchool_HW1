
$(document).ready(function () {
    $('.dropdown1').click(function (e) { 
        e.preventDefault();
        $('.dropdown1').toggleClass('active');
        $('.dropdown1-open').stop().slideToggle();
        if($('.dropdown2-open').is(':visible')){
            $('.dropdown2-open').hide();
            $('.dropdown2').toggleClass('active');
        }
    });
    $('.dropdown2').click(function (e) { 
        e.preventDefault();
        $('.dropdown2').toggleClass('active');
        $('.dropdown2-open').stop().slideToggle();
        if($('.dropdown1-open').is(':visible')){
            $('.dropdown1-open').hide();
            $('.dropdown1').toggleClass('active');
        }
    });

    $('.contactUs img').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    lightbox.option({
        'disableScrolling': true
      })
});


