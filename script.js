$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      // autoplay: true,
      nav: true,
      loop: true,
      smartSpeed: 2000,
      navText: ["<img src='/shaker/img/left.svg'>","<img src='/shaker/img/right.svg'>"],

      responsive: {
        320: {
          items: 1,
          nav: false,
          stagePadding: 30
        },
        425: {
          items: 1,
          stagePadding: 80
        },
        726: {
          items: 3,
          stagePadding: 60,
        },
        1024: {
          items: 4,
          stagePadding: 60
        },
        1440: {
          items: 4,
          stagePadding: 100
        },
        2560: {
          items: 5,
          stagePadding: 125,
        }
      }
    });
  });

  // "&#8249;&#8249","&#8250;&#8250"

  // ["<i class='fas fa-angle-double-left'></i>","<i class='fas fa-angle-double-right'></i>"]