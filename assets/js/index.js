


$(window).scroll(function () {
    if ($("#navbar").offset().top > 500) {
        $("#navbar").addClass("bg-info")
            .removeClass("bg-transparent");
    } else {
        $("#navbar").addClass("bg-transpatent")
            .removeClass("bg-info");

    }

})
