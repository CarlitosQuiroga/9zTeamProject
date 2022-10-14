$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1,
        arrows: false,
        speed: 3000,
        cssEase: "linear",
        dots: false,
        pauseOnHover: false,
        responsive: [{
        breakpoint: 1920,
        settings: {
            slidesToShow: 5
        }        
    },{
        breakpoint:520,
        settings: {
            slidesToShow: 3
        }
    }]  
    });
});