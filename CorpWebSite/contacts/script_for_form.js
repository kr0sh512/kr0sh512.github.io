if (!window.jQuery) {
    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script > ');
}
document.addEventListener("DOMContentLoaded", function () {
    $("#form_ask").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "send_email.php",
            type: "POST",
            data: $("#form_ask").serialize(),
            success: function (response) {
                $('#form_ask')[0].reset();
                $("#name").val("");
                $("#email").val("");
                $("#question").val("");
            },
            error: function (response) {
                //обработка ошибок при отправке
            },
        });
    });
});
