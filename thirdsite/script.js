
document.addEventListener("DOMContentLoaded", function () {
    var p1 = document.querySelector("#c1");
    var p2 = document.querySelector("#c2");

    setTimeout(() => {
        $.fn.animate_Text = function () {
            var string = this.text();
            return this.each(function () {
                var $this = $(this);
                $this.html(string.replace(/./g, '<span class="new">$&</span>'));
                $this.find('span.new').each(function (i, el) {
                    setTimeout(function () { $(el).addClass('div_opacity'); }, 20 * i);
                });
            });
        };
        $('#example').show();
        $('#example').animate_Text();
    }, 1000);
});
