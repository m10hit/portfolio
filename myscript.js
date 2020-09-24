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

    $(".menu-project").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
    });

    $(".about-page").click(function(){
        var url = $(this).attr("id") + ".html"
        $("#div1").load(url)
        $('a.nav-link').removeClass("btn btn-primary blue-select");
        $(".menu-about").addClass("btn btn-primary");
    });

    $('a.nav-link').click(function(e){
    $('a.nav-link').removeClass("btn btn-primary blue-select");
    $(this).addClass("btn btn-primary");
});
});
