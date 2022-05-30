let mySideNav=document.getElementById("mySidenav");
let main=document.getElementById("main");

function openNav() {
    if(  mySideNav.style.width == "0px" && main.style.marginLeft =="0px"){
        mySideNav.style.width = "250px";
        main.style.marginLeft = "250px";
    }
    else{
        mySideNav.style.width = "0px";
        main.style.marginLeft = "0px";
    }
 
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}




$(document).ready(function () {
    $("#acc div:first").css("display", "block");
    $("#acc h3").click(function () {

        $(this).next().slideToggle(500);
        $("#acc div").not($(this).next()).slideUp(500);

    });
});




function countdown() {
    var now = new Date();
    var eventDate = new Date(2018, 12, 17);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(countdown, 1000);
}

countdown();


$("#mySidenav a").click(function(eventInfo){
    let sectionHref= $(eventInfo.target).attr("href")
    let sectionOffset=$(sectionHref).offset().top;
    $("html,body").animate({scrollTop:`${sectionOffset}`} , 1000)
})




$(window).scroll(function(){
    let wScroll= $(window).scrollTop();
    let accOfset= $("#acc").offset().top;


    if(wScroll>accOfset){
        $(".fa-arrow-circle-up").fadeIn(1000)
    }
    else
    {
        $(".fa-arrow-circle-up").fadeOut(1000)
    }

})





$(".fa-arrow-circle-up").click(function(){
    $("html,body").animate({scrollTop:"0px"}, 1000)
})
