/*(function () {
    var container = document.querySelector('.hotels-list');
//перебираем все эл-ты в структуре данных
    hotels.forEach(function(hotel){
        var element = getElementFromTemplate(hotel);
        container.appendChild(element);
    });
//для каждого элемента создаем DOM-элемент на основе шаблона
    function getElementFromTemplate(data) {
        var template = document.querySelector('#hotel-template');
        //св-во content не работает в ie надо писать альтернативный вариант
        if ('content' in template) {
            var element = template.content.children[0].cloneNode(true);
        } else {
            var element = template.children[0].cloneNode(true);
        }
        element.querySelector('.hotel-name').textContent = data.name;
        element.querySelector('.hotel-rating').textContent = data.rating;
        element.querySelector('.hotel-price').textContent = data.price;

        var backgroundImage = new Image();
        var IMAGE_TIMEOUT = 10000;
        //если сервер не отвечает по таймауту, событие
        //error в этом случае не произойдет
        //записываем результат работы таймаута в переменную imageLoadTimeout
        var imageLoadTimeout = setTimeout(function() {
            backgroundImage.src = ''; //прекращаем загрузку, передав пустой src
            element.classList.add ('hotel-nophoto');
        }, IMAGE_TIMEOUT);

        backgroundImage.onload = function(){
            clearTimeout(imageLoadTimeout);
            element.style.backgroundImage = 'url(\''+ backgroundImage.src + '\')';
        };

        //после задания изозражениям src они загружаются с сервера
        //для проверки загрузилось изображение или нет сущ cобытие onload
        //если изображение не загрузилось
        backgroundImage.onerror = function(){
            element.classList.add ('hotel-nophoto');
        };
        backgroundImage.src = data.preview;

        return element;
    }
})();*/

/*var amenityName = {
    'breakfast' : 'завтрак',
    'parking': 'парковка',
    'wifi': 'Wifi'
};

var container = document.querySelector('.hotels-list');



function renderHotels(hotels) {
    hotels.forEach(function(hotel){
        var element = getElementFromTemplate(hotel);
        container.appendChild(element);
    });
}

function getHotels() {
    //новый объект создается с помощью конструктора
    var xhr = new XMLHttpRequest();
    //после создания - указать параметры запроса
    //с помощью метода open
    xhr.open('GET', '/src/data/hotels.json');
    //таймаут задается св-ом timeout до отправки
    /!*xhr.timeout = 10000;
    xhr.onload = function(evt) {
        console.log(JSON.parse(evt.srcElement.response));
    };*!/
    xhr.onload = function(evt) {
        var rawData = evt.target.response;
        var loadedHotels = JSON.parse(rawData);

        //обработка загруженных данных(например отрисовка)
        renderHotels(loadedHotels);

    };

    xhr.send();
}getHotels();*/

var loadedData = null;
//function getHotels() {
    //новый объект создается с помощью конструктора
    var xhr = new XMLHttpRequest();
    //после создания - указать параметры запроса
    //с помощью метода open
    xhr.open('GET', 'js/data.json');
    //таймаут задается св-ом timeout до отправки
    xhr.timeout = 10000;
    xhr.onload = function(evt) {
        //console.log(evt);
        console.log(JSON.parse(evt.srcElement.response));
    };
    xhr.send();
//}
//getHotels();

