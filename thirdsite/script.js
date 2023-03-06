function animateShow(id) {
    delay = 60;
    elem = $('#b' + parseInt(id) + ' .rg_text');
    document.getElementById('b' + parseInt(id)).style.display = "flex";
    elem.show();
    var string = elem.text();
    elem.each(function () {
        var $elem = $(elem);
        $elem.html(string.replace(/./g, '<span class="new">$&</span>'));
        $elem.find('span.new').each(function (i, el) {
            setTimeout(function () { $(el).addClass('div_opacity'); }, delay * i);
        });
    });
    return (string.length * delay);
}

isRun = false;

function startAnim(i) {
    animateShow(i);
    t = $('#b' + parseInt(i) + ' .rg_text').text().length * 60 + 100;
    setTimeout(function () {
        document.querySelector('#b' + parseInt(i) + ' .rg_text').style.display = "none";
        document.querySelector('#b' + parseInt(i) + ' .st_text').style.display = "block";
        $('#b' + parseInt(i) + ' .st_text').addClass('st');
        if (i == 7) {
            setTimeout(function () {
                document.querySelector("video").src = "videos/fire.webm";
                document.querySelector("#out-video").style = "display: flex;";
            }, 1200);
        }
        if (i == 36) {
            setTimeout(function () {
                document.querySelector("video").src = "videos/1.webm";
                document.querySelector("#out-video").style = "display: flex;";
            }, 1000);
        }
    }, t);
    isRun = false;
}

function fade(i) {
    if (i == 7) {
        document.querySelector("#out-video").style = "display: none;";
    }
    fadetime = 600;
    $('#b' + parseInt(i) + ' .st_text').fadeOut(fadetime);
    setTimeout(function () {
        document.getElementById('b' + parseInt(i)).style.display = "none";
    }, fadetime);
}

// * изменение текущей "локации"
lt = 36;                  //  количество готовых кадров
it = 1;                  // ! номер стартового кадра
is_debug = false//(it != 1);    //  не сменять кадр
// * изменение текущей "локации"

document.onclick = function () {
    if (it == lt + 1 || is_debug) return;
    if (!isRun) {
        isRun = true;
        fade(it - 1);
        setTimeout(function () {
            startAnim(it);
            it++;
        }, 600 + 200);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    if (is_debug || prompt("Введите пароль", "") == "ZayaZlaya58") {
        setTimeout(function () {
            document.getElementById("load_outer").style.display = "none";
            startAnim(it++);
        }, 400);
    }
});

