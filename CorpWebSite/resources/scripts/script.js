document.addEventListener("DOMContentLoaded", function () {
    $("a").click(function () {
        var href = $(this).attr("href");
        setTimeout(function () {
            window.location = href;
        }, 200);
        return false;
    });
});
