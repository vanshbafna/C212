$(function() {
    $("#show_chat").click(function(){
        $(".left-window").css("display","none");
        $(".right-window").css("display","block");
        $(".header-back").css("display","block");
    })
    $(".header-back").click(function(){
        $(".left-window").css("display","block");
        $(".right-window").css("display","none");
        $(".header-back").css("display","none");
    })
   
})