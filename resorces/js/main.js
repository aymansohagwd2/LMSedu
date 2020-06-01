
$(document).ready(function(){
    // slider secion
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:1000,
        responsive:{
            0:{
                items:1
            },
            577:{
                items:2
            },
            980:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    // navigation section
    $("#course-ct-section").waypoint(function(direction){
        if(direction == "down")
        {
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    },
    {
        offset: '5%'
    });
    // active link
    $(".main-nav li a").click(function(){
        $(".main-nav li a").removeClass("active-class");
        $(this).addClass("active-class")
    });
    // logo active
    $(".logo").click(function(){
        $(".main-nav li a").removeClass("active-class");
        $(".main-nav li:first-child a").addClass("active-class");
    });
});

// making a moblie menu

function openNav() {
    document.getElementById("mynav").style.width = "50%";
}
function closeNav() {
    document.getElementById("mynav").style.width = "0%";
}