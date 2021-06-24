$(document).ready(function() {
    $('#navbar li a').click(function() {
        $("#navbar li").removeClass('active');
        $(this).parents('li').addClass('active');

        let sectionId = $(this).attr("href");
        $(".main-section").removeClass('active');
        $(sectionId).addClass('active');
    });
});