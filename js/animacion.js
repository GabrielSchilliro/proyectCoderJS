$(function(){
    $("#btnHide").on("click",() => $(".history-image").slideUp(500));  
    $("#btnShow").on("click",() => $(".history-image").slideDown(500));  
})