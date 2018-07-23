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

//для каждого элемента создаем DOM-элемент на основе шаблона
function getElementFromTemplate(data) {
    var template = document.querySelector('#hotel-template');
    //св-во content не работает в ie надо писать альтернативный вариант
    if ('content' in template) {
        //обращаемся к св-ву контент, которое хранит всю разметку шаблона
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

var amenityName = {
 'breakfast': 'завтрак',
 'parking': 'парковка',
 'wifi': 'WiFi'
 };

  var container = document.querySelector('.hotels-list');
  var activeFilter = 'filter-all';
  var hotels = [];

  var filters = document.querySelectorAll('.filter__item');
  //for (var i = 0; len = filters.length; i < len;i < filters.length; i++) {
  for (var i = 0; i < filters.length; i++) {
      filters[i].onclick = function(evt) {
         var clickedElementID = evt.target.id;
         setActiveFilter(clickedElementID);
      };
  }

 getHotels();

 //отрисовка списка отелей
 function renderHotels(hotelsToRender) {
     container.innerHTML = '';
     var fragment = document.createDocumentFragment();

     hotelsToRender.forEach(function(hotel){
         var element = getElementFromTemplate(hotel);
         //для каждого из 50 элементов вызывается отрисовка в DOM
         //чтобы избежать пересчета параметров каждого элемента для вставки
         //на страницу - пользуются фрагментами, нодами вида DocumentFragment,
         //которые представляют собой контейнеры для других элементов.

         fragment.appendChild(element);
     });

     container.appendChild(fragment);
 }

  //уст-ка выбранного фильтра
  //@param {string} id
  function setActiveFilter(id) {
  //предотвращение повторной уст-ки одного и того же фильтра.
    if (activeFilter === id) {
        return;
    }

    document.querySelector('#' + activeFilter).classList.remove('filter__item_selected');
    document.querySelector('#' + id).classList.add('filter__item_selected');

    var filteredHotels = hotels.slice(0); //Копирование массива

    switch (id){
        case 'filter-expensive':

            filteredHotels = filteredHotels.sort(function (a, b) {
                return b.price - a.price;
            });

            break;
        case 'filter-2stars': break; //default
    }
    renderHotels(filteredHotels);
  }

 //загрузка списка отелей

 function getHotels() {
     //новый объект создается с помощью конструктора
     var xhr = new XMLHttpRequest();
     //после создания - указать параметры запроса
     //с помощью метода open
     xhr.open('GET', 'data/hotels.json');
     //таймаут задается св-ом timeout до отправки
     /*xhr.timeout = 10000;
     xhr.onload = function(evt) {
     console.log(JSON.parse(evt.srcElement.response));
     };*/
     xhr.onload = function(evt) {
         var rawData = evt.target.response;
         var loadedHotels = JSON.parse(rawData);

         //обработка загруженных данных(например отрисовка)
         renderHotels(loadedHotels);
     };

     xhr.send();
 }

/*function getHotels() {
    var loadedData = null;

    //новый объект создается с помощью конструктора
    var xhr = new XMLHttpRequest();
    //после создания - указать параметры запроса
    //с помощью метода open
    xhr.open('GET', 'data/hotels.json');
    //таймаут задается св-ом timeout до отправки
    xhr.timeout = 10000;
    xhr.onload = function (evt) {
        //console.log(evt);
        console.log(JSON.parse(evt.srcElement.response));
    };
    xhr.send();
}getHotels();*/

