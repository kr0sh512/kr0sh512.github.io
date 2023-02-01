var myHeading = document.querySelector('h1');
myHeading.textContent = '123';

var image = document.querySelector('img');
image.onclick = function () {
    var pathImg = image.getAttribute('src');
    if (pathImg == 'images/second.png') {
        image.setAttribute('src', 'images/test-image.png');
    } else {
        image.setAttribute('src', 'images/second.png');
    }
}

var myButton = document.querySelector('button');
function setUserName() {
    var name = prompt('Enter your name');
    if (name === '' || name === null) return;
    localStorage.setItem('name', name);
    myHeading.textContent = 'Hi, ' + name;
}

// localStorage.clear()

myButton.onclick = setUserName;
if (localStorage.getItem('name')) myHeading.textContent = 'Hi, ' + localStorage.getItem('name');