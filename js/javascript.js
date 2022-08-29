$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active');
        $(this).parent().find('.dropdown-open').slideToggle();
        $(this).parent().siblings().find('.dropdown-open').hide();
    })


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

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect:'slide',
    autoplay: {
        delay: 5000,
    },
  
    pagination: {
      el: '.swiper-pagination',
    },
   
  });
