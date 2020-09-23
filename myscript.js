$(document).ready(function(){
    $(".menu-experience").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
    });

    $(".menu-about").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
    });

    $(".menu-home").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
    });

    $(".about-home").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
        $('a.nav-link').removeClass("blue-select");
        $(".menu-about").addClass("blue-select");
    });

    $('a.nav-link').click(function(e){
    $('a.nav-link').removeClass("blue-select");
    $(this).addClass("blue-select");
});
});
