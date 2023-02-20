function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// function animateShow(id) {
//     delay = 60;
//     $.fn.animate_Text = function () {
//         var string = this.text();
//         return this.each(function () {
//             var $this = $(this);
//             $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//             $this.find('span.new').each(function (i, el) {
//                 setTimeout(function () { $(el).addClass('div_opacity'); }, delay * i);
//             });
//         });
//     };
//     $('#b' + parseInt(id) + ' #rg_text').show();
//     $('#b' + parseInt(id) + ' #rg_text').animate_Text();
// }

function animateShow(id) {
    delay = 60;
    elem = $('#b' + parseInt(id) + ' #rg_text');
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

// function func2() {
//     t = 0;
//     fadetime = 600;
//     between = 1400;
//     for (let i = 1; i < 4; ++i) {
//         setTimeout(function () {
//             animateShow(i);
//         }, t);
//         t += $('#b' + parseInt(i) + ' #rg_text').text().length * 60;

//         setTimeout(function () {
//             document.querySelector('#b' + parseInt(i) + ' #rg_text').style.display = "none";
//             document.querySelector('#b' + parseInt(i) + ' #st_text').style.display = "block";
//             $('#b' + parseInt(i) + ' #st_text').addClass('st');
//         }, t);

//         t += between;

//         if (i == 3) break;
//         setTimeout(function () {
//             $('#b' + parseInt(i) + ' #st_text').fadeOut(fadetime);
//         }, t);
//         setTimeout(function () {
//             document.getElementById('b' + parseInt(i)).style.display = "none";
//         }, t + fadetime);
//         t += fadetime;
//     }
// }

isRun = false;

function func2(i) {
    animateShow(i);
    t = $('#b' + parseInt(i) + ' #rg_text').text().length * 60 + 100;
    setTimeout(function () {
        document.querySelector('#b' + parseInt(i) + ' #rg_text').style.display = "none";
        document.querySelector('#b' + parseInt(i) + ' #st_text').style.display = "block";
        $('#b' + parseInt(i) + ' #st_text').addClass('st');
    }, t);
    isRun = false;
}

function fade(i) {
    fadetime = 600;
    $('#b' + parseInt(i) + ' #st_text').fadeOut(fadetime);
    setTimeout(function () {
        document.getElementById('b' + parseInt(i)).style.display = "none";
    }, fadetime);
}

it = 2;
document.onclick = function () {
    if (it == 4) return;
    if (!isRun) {
        isRun = true;
        fade(it - 1);
        setTimeout(function () {
            func2(it);
            it++;
        }, 600 + 200);
    }
    console.log(123);
};

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("load_outer").style.display = "none";
        func2(1);
    }, 400);
    //$('#b1 #rg_text').fadeOut(300);
});

