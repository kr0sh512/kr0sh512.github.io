document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию

    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader

        const nav = document.querySelector('nav') // находим header и записываем в константу

        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)

        window.addEventListener('scroll', () => { // при прокрутке страницы

            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу

            const headerHidden = () => nav.classList.contains('header_hidden') // узнаем скрыт header или нет

            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                nav.classList.add('header_hidden') // то скрываем header
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                nav.classList.remove('header_hidden') // то отображаем header
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент

        })

    }

    onScrollHeader() // вызываем основную функцию onScrollHeader

});
