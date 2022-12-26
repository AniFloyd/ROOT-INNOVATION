// Type Effect
var typed3 = new Typed('#type', {
    strings: ['Market Strategy','Future Planning', 'Start-Up Ideas','Business Planning'],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin:500,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })