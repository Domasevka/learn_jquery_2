var clickableButton = document.querySelector('button');

//множественный обработчик событий добавляется с помощью метода addEventListener
clickableButton.addEventListener('click', function (evt) {
    document.body.innerHTML += '<br> First click handler';

});
clickableButton.addEventListener('click', secondClickHandler);
//можно удалять с помощью метода removeEventListener
//второй обязательный аргумент removeEventListener функция-обработчик
//если нужно удалять обработчик должны использоваться менованные функции
clickableButton.removeEventListener('click', secondClickHandler);

function secondClickHandler(evt) {
    document.body.innerHTML += '<br> Second click handler';
}