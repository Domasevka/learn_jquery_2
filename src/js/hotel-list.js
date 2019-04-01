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
  var hotels = [];//не подходит - это изначальный список
  var filteredHotels = [];//поэтому сохраним отфильтрованный список глобально
  var currentPage = 0;
  var PAGE_SIZE = 9;

  //чтобы добавить обработчики на клики, приходится пройтись по всем
  // элементам и каждому из них добавить обработчик. Это трудоемкая
  //операция. Можно ли сделать так, чтобы обавлялся только один
  //обработчик сразу на все фильтры? Можно через делегирование.
  //Делегирование - прием основанный на всплытии событий.
  var filters = document.querySelector('.filter-hotels');
  filters.addEventListener('click', function(evt){
    var сlickedElement = evt.target;
    if (сlickedElement.classList.contains('filter__item')) {
      setActiveFilter(сlickedElement.id);
    }
  });


  //старый обработчик
  // for (var i = 0; i < filters.length; i++) {
  //     filters[i].onclick = function(evt) {
  //        var clickedElementID = evt.target.id;
  //        setActiveFilter(clickedElementID);
  //     };
  // }

  var scrollTimeout;

  window.addEventListener('scroll', function(evt) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
          //console.log('scroll');
          //как определить, что скролл внизу страницы и пора показать
          //следующую порцию отелей?
          //Проверить - виден ли футер страницы.
          //как проверить виден ли футер страницы?
          //1. определить положение футера относ-но экрана(вьюпорта)
          var footerCoordinates = document.querySelector('footer').getBoundingClientRect();

          //2. определить высоту экрана
          var viewportSize = window.innerHeight;
          //3. если смещение футера минус высота экрана меньше высоты футера,
          //    футер виден хотя бы частично
          if (footerCoordinates.bottom - viewportSize <= footerCoordinates.height){
              if (currentPage < Math.ceil(filteredHotels.length / PAGE_SIZE)) {
                  renderHotels(filteredHotels, ++currentPage);
              }
          }
      }, 100)
  });

   getHotels();

   //отрисовка списка отелей
   //@param{Array.<Object>} hotels

//function renderHotels(hotelsToRender) {ToDo delete old
function renderHotels(hotelsToRender, pageNumber, replace) {
    if (replace) {
        container.innerHTML = '';
    }

     var fragment = document.createDocumentFragment();

     var from = pageNumber * PAGE_SIZE;
     var to = from + PAGE_SIZE;
     var pageHotels = hotelsToRender.slice(from, to);

     //hotelsToRender.forEach(function(hotel){ToDo delete old
        pageHotels.forEach(function(hotel){
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
  //@param {boolean=} force Флаг, при котором игнорируется
  // проверка на повтрное присвоение фильтра
  function setActiveFilter(id, force) {
  //предотвращение повторной уст-ки одного и того же фильтра.
    if (activeFilter === id && !force) {
        return;
    }
    //Алгоритм
    //подсветка выбранного фильтра
    var selectedElement = document.querySelector('#' + activeFilter);
    if (selectedElement) {
        selectedElement.classList.remove('filter__item_selected');
    }
      document.querySelector('#' + id).classList.add('filter__item_selected');
    //document.querySelector('#' + activeFilter).classList.remove('filter__item_selected');ToDo delete old
    //document.querySelector('#' + id).classList.add('filter__item_selected');ToDo delete old

    filteredHotels = hotels.slice(0); //Копирование массива
    //отсортировать,  отфильтровать отели по выбранному параметру и вывестИ на страницу


    switch (id){

        case 'filter-expensive':
            //для показа сначала дорогих отелей список нужно отсортировать
            //по убыванию цены
            filteredHotels = filteredHotels.sort(function (a, b) {
                return b.price - a.price;
            });
            break;

        case 'filter-cheap':
            filteredHotels = filteredHotels.sort(function (a, b) {
                return a.price - b.price;
            });

            break;

        case 'filter-2stars':
            filteredHotels = filteredHotels.sort(function (a, b) {
                return a.stars - b.stars;
            }).filter(function(item) {
                return item.stars > 2;
            });

            break;

        case 'filter-6rating':
            filteredHotels = filteredHotels.sort(function (a, b) {
                return a.rating - b.rating;
            }).filter(function(item) {
                return item.rating >=6;
            });

            break; //default
    }
    //renderHotels(filteredHotels);
    renderHotels(filteredHotels, 0, true);
    activeFilter = id;
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
         hotels = loadedHotels;
         //updateLoadedHotels(loadedHotels);

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

