
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1100,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:2
        },
        1300:{
            items:3
        },
        1500:{
            items:4
        }
    }
})

$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if (direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky')
                }
            }, {
                offset: '600px'
            }
        )


        //mobile nav
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                    if($(window).width() <= 1093)
                    {
                        $('.heading-main-box').css('padding-top', '400px');
                        $('.main-nav').css('display', 'block');
                    }
                }else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                    if($(window).width() <= 1093)
                    {
                        $('.heading-main-box').css('padding-top', '0');
                        $('.main-nav').css('display', 'none');
                    }
                }
            }
        )
    }
)


// let timer = setInterval(nextCard, 1500);

//Animation plugin
AOS.init();