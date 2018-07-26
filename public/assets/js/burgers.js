var toEat,
    regurgitate;

$(".hover-craft").on({
    click: function(){
        toEat = undefined,
        regurgitate = undefined,
        $(".hover-craft").attr("data-active", "no");
        $(".hover-craft").css("background", "");
        $(this).attr("data-active", "yes");
        $(this).css("background", "rgb(145, 215, 147)");
        if($(this).attr("data-eaten") === "no"){
            toEat = $(this).text().trim();
        } else {
            regurgitate = $(this).text().trim();
        };
    },
    mouseenter: function(){
        if($(this).attr("data-active") === "no"){
            $(this).css("background", "rgb(140, 177, 231)");
        } else {
            $(this).css("opacity", "0.65");
        };
    },
    mouseleave: function(){
        if($(this).attr("data-active") === "no"){
            $(this).css("background", "");
        } else {
            $(this).css("opacity", "");
        };
    }
});

$("#eat-me").click(function(){
    if(toEat){
        console.log(toEat);
    };
});

$("#ewww").click(function(){
    if(regurgitate){
        console.log(regurgitate);
    };
});

// $(".btn").click(function(){
//     $(".hover-craft").attr("data-active", "no");
//     $(".hover-craft").css("background", "");
// });