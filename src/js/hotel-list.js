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
    return element;
}


function getHotels() {
    //новый объект создается с помощью конструктора
    var xhr = new XMLHttpRequest();
    //после создания - указать параметры запроса
    //с помощью метода open
    xhr.open('GET', '/src/data/hotels.json');
    //таймаут задается св-ом timeout до отправки
    xhr.timeout = 10000;
    xhr.onload = function(evt) {
        console.log(evt);
    };
    xhr.send();
}
getHotels();

