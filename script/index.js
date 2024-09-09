$(function () {
    var bullet = ['이차돌<br /> 된장찌개', '매드로갈릭<br />부채살 스테이크', '새벽집 소고기<br />된장전골', '육대장<br />대파 육개장', '리뷰이벤트'];
    var swiper1 = new Swiper('.slide-pagenav ', {
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide-pagenav .swiper-button-next',
            prevEl: '.slide-pagenav .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide-pagenav-btn',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
    });
});
$(function () {
    var swiper2 = new Swiper('.gallery .gallery_inner ', {
        slidesPerView: 4,//보여지는 갤러리 수
        spaceBetween: 10,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        /*autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },*/
        loop: true,//슬라이드 무한반복

        pagination: {//블릿 버튼
            el: '.gallery .swiper-pagination',
            clickable: true,
        },
    });
});
$(function () {
    var swiper3 = new Swiper('.gallery-3d ', {
        centeredSlides: true, //센터 모드
        slidesPerView: 3, // 슬라이드 갯수
        slideToClickedSlide: true, // 슬라이드 클릭시 이동
        effect: 'coverflow',
        loop: true,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            stretch: -50,
        },
        navigation: {//화살표 버튼
            nextEl: '.gallery-3d .swiper-button-next',
            prevEl: '.gallery-3d .swiper-button-prev',
        },
    });
});
$(function () {
    $('.click1').click(function () {
        $('.set1').show(); //.fadeIn(); 
        $('.set2, .set3, .set4, .set5').hide(); //.fadeOut();  
    });
    $('.click2').click(function () {
        $('.set2').show(); //.fadeIn(); 
        $('.set1, .set3, .set4, .set5').hide(); //.fadeOut();  
    });
    $('.click3').click(function () {
        $('.set3').show(); //.fadeIn(); 
        $('.set1, .set2, .set4, .set5').hide(); //.fadeOut();  
    });
    $('.click4').click(function () {
        $('.set4').show(); //.fadeIn(); 
        $('.set1, .set2, .set3, .set5').hide(); //.fadeOut();  
    });
    $('.click5').click(function () {
        $('.set5').show(); //.fadeIn();
        $('.set1, .set2, .set3, .set4').hide(); //.fadeOut();  
    });
});
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});
$(function () {
    $('#tab01 ul li:nth-child(1)').click(function () {
        $('.guide_text2').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text2').hide(); //.fadeOut();  
    });
    $('#tab01 ul li:nth-child(2)').click(function () {
        $('.guide_text3').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text3').hide(); //.fadeOut();  
    });
    $('#tab01 ul li:nth-child(3)').click(function () {
        $('.guide_text4').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text4').hide(); //.fadeOut();  
    });;
    $('#tab01 ul li:nth-child(4)').click(function () {
        $('.guide_text5').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text5').hide(); //.fadeOut();  
    });;
    $('.tab_in> img').click(function () {
        $('.guide_text1').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text1').hide(); //.fadeOut();  
    });
});
$(function () {
    $('#tab02 ul li:nth-child(1)').click(function () {
        $('.guide_text2').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text2').hide(); //.fadeOut();  
    });
    $('#tab02 ul li:nth-child(2)').click(function () {
        $('.guide_text3').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text3').hide(); //.fadeOut();  
    });
    $('#tab02 ul li:nth-child(3)').click(function () {
        $('.guide_text4').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text4').hide(); //.fadeOut();  
    });;
    $('#tab02 ul li:nth-child(4)').click(function () {
        $('.guide_text5').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text5').hide(); //.fadeOut();  
    });;
    $('.tab_in> img').click(function () {
         $('.guide_text1').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text1').hide(); //.fadeOut();  
    });
});
$(function () {
    $('#tab03 ul li:nth-child(1)').click(function () {
        $('.guide_text2').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text2').hide(); //.fadeOut();  
    });
    $('#tab03 ul li:nth-child(2)').click(function () {
        $('.guide_text3').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text3').hide(); //.fadeOut();  
    });
    $('#tab03 ul li:nth-child(3)').click(function () {
        $('.guide_text4').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text4').hide(); //.fadeOut();  
    });;
    $('#tab03 ul li:nth-child(4)').click(function () {
        $('.guide_text5').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text5').hide(); //.fadeOut();  
    });;
    $('.tab_in> img').click(function () {
        $('.guide_text1').show(); //.fadeIn(); 
        $('.guide_text>div').not('.guide_text1').hide(); //.fadeOut();  
    });
    // 리뷰
    $(function () {
        var swiper = new Swiper('.flowslide_inner ', {
            slidesPerView: 6,//보여지는 갤러리 수
            spaceBetween: 60,//갤러리 사이 간격
            speed: 3000,//버튼을 슬라이드가 넘어가는 시간
            autoplay: {
                delay: 0,//자동으로 넘어가기 전 머무르는 시간
                disableOnInteraction: false,
            },
            loop: true,//슬라이드 무한반복
        });

        $('.flowslide .swiper-slide').on('mouseover', function () {
            swiper.autoplay.stop();
        });
        $('.flowslide .swiper-slide').on('mouseout', function () {
            swiper.autoplay.start();
        });
    });
});