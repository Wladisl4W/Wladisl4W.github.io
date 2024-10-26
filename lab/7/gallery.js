$(document).ready(function() {
    $('.your-class').slick({
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            }
        },
        ]
    });
});