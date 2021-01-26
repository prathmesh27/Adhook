$('.slider-sec').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,

                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,

                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.video-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,

                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                dots: true,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.health-packages-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '20px'
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px'
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: true,
                centerPadding: '35px'
            }
        },
        {
            breakpoint: 480,
            arrows: false,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.blog-sec').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                centerMode: true,
                centerPadding: '20px',
                dots: true
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                centerMode: true,
                centerPadding: '20px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

function getTestByOrgen(id_no) {
    hideShowAllParts(id_no);
}

function hideShowAllParts(id_no) {
    $('.hide-img').hide();
    $('.show-img').show();
    $('#active_img' + id_no).hide();
    $('#hide-img' + id_no).show();
}
// Search icon toggle
$('#search-icon').click(function() {
    // alert();
    $('.search-section-window').css('display', 'block');
});
$('#back-btn').click(function() {
    // alert();
    $('.search-section-window').css('display', 'none');
});
// 
// Sidebar toggle
$('.triggerSidebar2').click(function() {
    $('.Sidenavbar').css('left', '0px')
    $('.overlay2').css('display', 'block')
})

var kori = function() {
    $('.hideSidebar2').css('display', 'none')
    $('.overlay2').css('display', 'none')
    $('.Sidenavbar').css('left', '-405px')

}

$('.hideSidebar2').click(kori)
$('.overlay2').click(kori)
// 
$(document).ready(function() {

    $("#filter").click(function() {
        $(".side_filter").toggle("");
    });

});

$(document).ready(function() {
    $(".sorting p").click(function() {
        $(".sort-dp").toggle("");
    });

});

// Hide navbar on scroll
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");

window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        header.classList.add("slideUp");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        header.classList.add("slideDown");
    }

    new_scroll_position = last_scroll_position;
});
// Checkout page

function callingSlick() {

    $('.select_date').slick({
        infinite: true,
        speed: 700,
        prevArrow: '<a class="slide-arrow prev-arrow"></a>',
        nextArrow: '<a class="slide-arrow next-arrow"></a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

}