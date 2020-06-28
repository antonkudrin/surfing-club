$(document).on("ready", function () {
    $(".regular").slick({
   
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3000,

      responsive: [
        {
          breakpoint: 2570,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
           
          },
        },

        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          },
        },
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });