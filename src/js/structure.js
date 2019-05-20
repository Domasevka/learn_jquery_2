//Example start

/*var fruits = ["Яблоко", "Апельсин", "Груша"];
 console.log( fruits.push());
 console.log( fruits ); // Яблоко, Апельсин

 console.log(fruits.length);*/



/*var fruits = []; // создать массив
 fruits[0] = 5; // присвоить свойство с любым номером
 fruits.age = 25;
 console.log(fruits.length);
 console.log( fruits );*/

/*var arr = ["Яблоко", "Апельсин", "Груша"];

 for (var i = 0; i < arr.length; i++) {
 console.log( arr[i] );
 console.log(arr.length);
 }*/



//block scope
/*function planet(population) {
 const loki = 'human';

 if (true) {
 const country = 'any';

 for (let person = 0; person < population; person++) {
 //do smth
 }
 }
 console.log(loki, country, person);
 }
 planet();*/

//namespace
/*if(window.space == null){
 window.space = {};
 }
 window.space.loki = 'god';
 window.space.planet = function (){};

 console.log(window.space)*/

//function example
//Task _2_
/*  var obj = {a: 1};

 (function (obj) {
 obj = {a: 2};

 })(obj);
 console.log(obj);*/
//__passing arguments to function__

/*var items = [1, 2, 3];

 function wtf(items){
 return items = [3, 2, 1];
 }

 wtf(items);
 console.log(items);

 var items = [1, 2, 3];

 function wtf(items){
 return items = [3, 2, 1];
 }

 wtf(items);
 console.log(items);

 /*function eat(arr) {
 arr.pop();
 }

 var arr = ["нам", "не", "страшен", "серый", "волк"]

 console.log( arr.length ); // 5
 eat(arr);
 eat(arr);
 console.log( arr.length ); // 3, в функцию массив не скопирован, а передана ссылка
 */


//__passing primitives to function__

/*function cookPie(type, radius, slice) {
 console.log('#cookPie:0', type, radius, slice);

 type = 'choco';
 radius = 42;
 slice = false;

 console.log('#cookPie:1', type, radius, slice);
 }
 const type = 'lemon';
 const radius = 30;
 const slice = true;

 cookPie(type, radius, slice);
 console.log('#global:0', type, radius, slice);*/


//__passing objects to function__

/*function cookPie(pieOptions) {
 console.log('#cookPie:0', pieOptions);

 pieOptions.type = 'choco';
 console.log('#cookPie:1', pieOptions);

 pieOptions = {};
 console.log('#cookPie:2', pieOptions);
 }

 const options = {type:'lemon', radius: 30 , slice: true};

 cookPie(options);
 console.log('#global:0', options);*/


//__passing ...arguments to function__
/*function cookPie(...args){
 console.log('#cookPie:0', args[0], args[1], args[2]);
 //#cookPie:0 lemon 14 true

 console.log('#cookPie:1', args.length);
 //3
 console.log('#cookPie:2', Array.isArray(args));
 //true
 console.log('#cookPie:2', (args));
 //["lemon", 14, true]
 }

 cookPie('lemon', 14, true);*/


//_function as data__
/*function cookPie(type, radius, slice){
 console.log('#cookPie:0', type, radius, slice);
 }

 const pieFlow = [mixIngredients, cookPie];
 pieFlow[1]('lemon', 42, false);

 cookPie.oven = 'oven#1';

 const lemonPie = {
 type: 'lemon',
 cook: cookPie,
 };*/

//замыкания ??????
/*var sayHello = function (name) {
 var text = 'Hello, ' + name;

 return function () {
 console.log(text);
 };
 };
 console.log(sayHello('Todd'));

 sayHello('Todd');
 var helloTodd = sayHello('Todd');
 helloTodd();*/

//__this__


//__1__ex
/*function cookPie(){
 console.log(this);
 }
 cookPie();*/

//__2__ex
//value of this is determinated by the invocation form,
//not context of definition

/*function cookPie(){
 console.log(this.type);
 }

 const lemonPie = { type: 'lemon' };
 const chocoPie = { type: 'choco' };

 lemonPie.nCookPie = cookPie;
 chocoPie.nCookPie = cookPie;

 console.log(lemonPie); //{type: "lemon", cookPie: ƒ}

 lemonPie.nCookPie;
 console.log(lemonPie.nCookPie);
 chocoPie.nCookPie();

 cookPie();

 new cookPie();*/

//__value of this__

//__3__ex
/*const lemonPie = {
 type: 'lemon',
 cookPie: function(){console.log(this); },
 };
 //{type: "lemon", cookPie: ƒ}

 lemonPie.cookPie();

 const cookPie = lemonPie.cookPie;

 cookPie();*/
//Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

//__4__ex

/*function Pie(type, radius){
 // this = {};
 this.type = type;
 this.radius = radius;
 this.cook = function (){
 console.log(this);
 }
 // return this;
 }

 const lemonPie = new Pie('lemon', 38);
 lemonPie.cook();
 console.log(Pie);*/

// const chocoPie = Pie('choco', 24);
// chocoPie.cook();

//__5__ex_new

/*function Pie(type, radius) {
 // this = {};
 this.type = type;
 this.radius = radius;
 this.cook = function () {
 const that = this;
 console.log(that);

 const innerCook = function () {
 console.log(this);
 console.log(that);
 };
 innerCook();
 };
 // return this;
 }
 const lemonPie = new Pie('lemon', 38);
 lemonPie.cook();*/

//__5-1__ex_new

/*function User(firstName, lastName) {
 // вспомогательная переменная
 this.phrase = "Привет";

 //  вспомогательная вложенная функция
 this.getFullName = function () {
 return firstName + " " + lastName;
 }

 this.sayHi = function() {
 return( this.phrase + ", " + this.getFullName() ); // использование
 };
 }

 var vasya = new User("Вася", "Петров");

 vasya.sayHi();

 console.log(vasya);
 console.log(vasya.sayHi());*/


//ToDo new
//_1_
/*function Accumulator(startingValue){
 this.value = startingValue;
 console.log(this.value);
 this.read = function() {
 this.value = +prompt("введите первое число", '0') + this.value;
 };
 console.log(this.value);
 }
 var calculate = new Accumulator(1);// начальное значение 1
 calculate.read(); // прибавит ввод prompt к текущему значению
 calculate.read(); // прибавит ввод prompt к текущему значению
 console.log( calculate.value ); // выведет текущее значение*/


//__6__ex_call

/*function cookPie(){
 console.log('#cookPie', this.type, this.radius);
 }
 const lemonPie = {type: 'lemon', radius: 9, cook: cookPie };
 lemonPie.cook();
 console.log(lemonPie);
 //#cookPie lemon 9

 const chocoPie = {type: 'choco', radius: 17};

 lemonPie.cook.call(chocoPie);
 console.log(chocoPie);

 //#cookPie choco 17*/

/*function cookPie(radius){
 console.log('#cookPie', this.type, radius);
 }
 const lemonPie = {type: 'lemon', radius: 9, cook: cookPie };

 const chocoPie = {type: 'choco', radius: 17};

 lemonPie.cook.apply(chocoPie);
 console.log(chocoPie);*/

//__7__ex_call
/*var user = {
 firstName: "Василий",
 surname: "Петров",
 patronym: "Иванович"
 };

 function showFullName(firstPart, lastPart) {
 console.log( this[firstPart] + " " + this[lastPart] );
 }

 // f.call(контекст, аргумент1, аргумент2, ...)
 showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
 showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"*/



//__8__ex_call

// function cookPie(radius, slice){
//     console.log('#cookPie', this.type, radius, slice);
// }
// const lemonPie = { type: 'lemon', radius: 9 };
// cookPie.call(lemonPie, 14, false);
// console.log(lemonPie);


//ToDo call
//_1_
/*function sum(arr) {
 return arr.reduce(function(a, b) {
 return a + b;
 });
 }
 console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)*/

//Для решения примените метод reduce к arguments,
// используя call, apply или одалживание метода.

/*function sumArgs(...args) {
 args.reduce = [].reduce; // одолжили метод (1)

 console.log((args));
 return args.reduce(function(a, b){
 return a + b;
 });

 console.log( argStr );
 }

 console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива*/


/*function printArgs(...args) {
 args.join = [].join; // одолжили метод (1)
 console.log((args));
 var argStr = args.join(':'); // (2)
 console.log( argStr ); // сработает и выведет 1:2:3
 }
 printArgs(1, 2, 3);*/


/*function printArgs() {
 var join = [].join; // скопируем ссылку на функцию в переменную
 // вызовем join с this=arguments,
 // этот вызов эквивалентен arguments.join(':') из примера выше
 var argStr = join.call(arguments, ':');
 alert( argStr ); // сработает и выведет 1:2:3
 }
 printArgs(1, 2, 3);*/


//__passing ...arguments to function__
/*function cookPie(...args){
 console.log('#cookPie:0', args[0], args[1], args[2]);
 //#cookPie:0 lemon 14 true

 console.log('#cookPie:1', args.length);
 //3
 console.log('#cookPie:2', Array.isArray(args));
 //true
 console.log('#cookPie:2', (args));
 //["lemon", 14, true]
 }

 cookPie('lemon', 14, true);*/


//__8__ex_apply


/*function cookPie(radius, slice){
 console.log('#cookPie', this.type, radius, slice);
 }
 const lemonPie = { type: 'lemon', radius: 9 };
 cookPie.call(lemonPie, 14, false);
 console.log(lemonPie);*/

//__9__ex_bind
/*function cookPie(radius, slice){
 console.log('#cookPie', this.type, radius, slice);
 }

 const lemonPie = {
 type: 'lemon',
 radius: 9
 };

 const cookLemonPie = cookPie.bind(lemonPie);
 cookLemonPie(47, true);

 const cookHugeLemonPie = cookPie.bind(lemonPie, Number.MAX_SAFE_INTEGER);
 cookLemonPie(false);*/

//IIFE Immediately Invoking Function Expressions
/*const lemonPie = {
 radius: 9,
 cook: (function () {
 const type = 'lemon';

 return function () {
 console.log('#cook', type, this.radius);
 };
 })(),
 };*/
//лексический scope
/*const pie = {type:'lemon', radius: 91};
 function cookPie() {
 console.log('#cookPie', pie);
 }
 function cookMyPie() {
 const pie = {type:'choco', radius: 87};
 console.log(cookPie());
 }
 console.log(cookMyPie());*/

//динамический scope
/*function cook() {
 console.log('#cookPie', this.type, this.radius);
 }
 const lemonPie = {cook, type: 'lemon', radius: 46};
 const chocoPie = {cook, type: 'choco', radius: 44};

 lemonPie.cook();
 chocoPie.cook();*/

//arrow functions
//no own this
//no own arguments
//cannot be used as constructors

/*let inc = x => x + 1;

let inc = function (x) {
    return x + 1;
};*/

//_1_ex
/*const cook = () => {
 console.log('#cookPie', this.type, this.radius);
 };
 const lemonPie = {cook, type: 'lemon', radius: 46};
 const chocoPie = {cook, type: 'choco', radius: 44};

 lemonPie.cook();
 chocoPie.cook();
 //#cookPie undefined undefined
 //#cookPie undefined undefined*/

//function end;
//ToDo scope


//Example end

//ToDo this

// _1_
/*var arr = ["a", "b"];

 arr.push(function() {
 alert( this );
 })

 arr[2]();*/



// _2_

/*var obj, method;

 obj = {
 go: function() { console.log(this); }
 };

 obj.go();            // (1) object
 (obj.go)();          // (2) object
 (method = obj.go)();      // (3) undefined
 (obj.go || obj.stop)(); // (4) undefined*/

// _3_
/*var calculator = {
 read: function() {
 this.numberA = +prompt("введите первое число", '10');
 this.numberB = +prompt("введите второе число", '-25');
 },

 sum: function() {
 return this.numberA + this.numberB;
 },

 mul: function() {
 return this.numberA * this.numberB;
 }
 }

 calculator.read();

 console.log( "Сумма=" + calculator.sum() );
 console.log( "Произведение=" + calculator.mul() );

 console.log(calculator);*/




/*function Calculator() {
 this.read = function() {
 this.numberA = +prompt("введите первое число", '10');
 this.numberB = +prompt("введите второе число", '-25');
 };

 this.sum = function() {
 return this.numberA + this.numberB;
 };

 this.mul = function() {
 return this.numberA * this.numberB;
 }
 }

 var calculator = new Calculator();
 calculator.read();

 console.log( "Сумма=" + calculator.sum() );
 console.log( "Произведение=" + calculator.mul() );

 var calculator1 = new Calculator();
 calculator1.read();

 console.log( "Сумма=" + calculator1.sum() );
 console.log( "Произведение=" + calculator1.mul() );

 console.log(Calculator);
 // Calculator() {
 //     this.read = function() {
 //         this.numberA = +prompt("введите первое число", '10');
 //         this.numberB = +prompt("введите второе число", '-25');
 //     };
 console.log(new Calculator);
 //Calculator {read: ƒ, sum: ƒ, mul: ƒ}*/

//ToDo call,

//ToDo massive
//_1_
/*var goods = ["Яблоко", "Апельсин", "Груша"];

 var itemLast = goods[goods.length - 1];

 console.log(itemLast);
 console.log( goods.length );*/

//_2_
/*var goods = ["Яблоко", "Апельсин", "Груша"];

 //goods.push("Компьютер");
 goods[goods.length] = 'Компьютер';

 console.log( goods );*/

//_3_
/*var styles = ["Джаз", "Блюз"];
 styles.push("Рок-н-Ролл");
 console.log( styles );
 styles[styles.length - 2] = 'Классика';
 console.log( styles.shift());
 console.log( styles.unshift('Рэп', 'Регги'));
 console.log( styles );*/

//_4_
/*var goods = ["Яблоко", "Апельсин", "Груша", "Лимон"];
 var min = 0;
 var max = goods.length - 1;
 var rand = min + Math.floor(Math.random() * (max + 1 - min));
 console.log(goods[max]);
 console.log(goods[rand]);*/


//_1_ex
/*function find(array, value) {
 console.log(arr);
 for (var i = 0; i < array.length; i++) {
 if (array[i] == value) return i;
 }
 return -1;
 }
 arr = ["test", 2, 1.5, false];
 console.log(arr);

 find(arr, "test"); // 0
 find(arr, 2); // 1
 find(arr, 1.5); // 2
 find(arr, 0); // -1*/


//_1_
/*function addClass(obj, cls) {

 var arr = obj.className.split(' ');
 console.log(arr)
 for (var i = 0; i < arr.length; i++) {
 if (arr.indexOf(cls) == -1) {
 arr.push(cls);
 obj.className = arr.join(' ');
 }
 }
 }

 var obj = {
 className: 'open menu'
 };

 addClass(obj, 'open');
 addClass(obj, 'me');
 addClass(obj, 'new');
 console.log(obj);*/

//_2_
/*function removeClass(obj, cls) {

 var arr = obj.className.split(' ');
 console.log(arr)
 for (var i = 0; i < arr.length; i++) {
 if (arr.indexOf(cls) !== -1) {
 arr.splice(arr[i], 1);
 }
 obj.className = arr.join(' ');

 }
 }


 var obj = {
 className: 'open menu menu'
 };

 removeClass(obj, 'open');
 removeClass(obj, 'blabla');
 console.log(obj);*/

//_2_1
/*function removeClass(obj, cls) {

 var arr = obj.className.split(' ');

 for (var i = 0; i < arr.length; i++) {
 if (arr[i] == cls) {
 arr.splice(i, 1);
 i--;

 console.log(arr);
 }

 obj.className = arr.join(' ');
 }
 }


 var obj = {
 className: 'my menu menu'
 };

 removeClass(obj, 'menu');
 console.log(obj);*/

//_3_ex

/*function compareNumeric(a, b) {
 if (a > b) return 1;
 if (a < b) return -1;
 }

 var arr = [ 1, 15, 2, 4 ];

 arr.sort(compareNumeric);

 console.log(arr);  // 1, 2, 15*/


//_3.1_
/*var filterRange = [];

 function filterRangeInPlace(arr, a, b) {

 filterRange = arr.sort(function (a, b){
 return a - b;
 }).filter(function(item) {
 return a <= item && item <= b;
 });
 }

 arr = [5, 3, 8, 1, -1];
 filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

 console.log( arr );
 console.log( filterRange );*/

//_3.2_
/*function filterRangeInPlace(arr, a, b) {
 var filterRange = [];

 arr = arr.sort(function (a, b){
 return a - b;
 });

 console.log( filterRange );
 for (var i = 0; i < filterRange.length; i++) {
 if (filterRange[i] >= b) {
 filterRange.splice(i, 1);
 i--;
 }
 }
 }

 arr = [5, 3, 8, 1];
 filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
 console.log( arr );*/

//_4_
/*var arr = [5, 2, 1, -10, 8];

 var result = [];
 for (var i = arr.length - 1; i >= 0; i--){
 result.push(arr[i]);
 }
 console.log( arr ); // 8, 5, 2, 1, -10
 console.log( result );*/

//_5_
/*var arr = [1, 2, 3, 4, 5];

 function randomFunction(a, b) {
 return 0.5 - Math.random();
 }
 arr.sort(randomFunction);

 console.log( arr ); */


//_6_
/*var vasya = { name: "Вася", age: 23 };
 var masha = { name: "Маша", age: 18 };
 var vovochka = { name: "Вовочка", age: 6 };

 var filteredAge = [];
 var people = [ vasya , masha , vovochka ];

 filteredAge = people.slice(0);
 console.log(filteredAge );

 filteredAge = filteredAge.sort(function (a, b) {
 return a['age'] - b['age'];
 });
 for ( var i = 0; i <= filteredAge.length; i++ ){
 console.log(filteredAge[i].name)
 }

 console.log(filteredAge[0].age);
 // теперь filteredAge: [vovochka, masha, vasya]*/


//_7_
/*function power(base, exponent) {
 if (exponent == 0)
 return 1;
 else
 return base * power(base, exponent - 1);
 }
 console.log(power(2, 3));*/

/*var list = { value: 1 };
 list.next = { value: 2 };
 list.next.next = { value: 3 };
 list.next.next.next = { value: 4 };

 function printList(list){
 var key = list;

 while (key) {
 console.log( key.value );
 key = key.next;
 }
 };

 /!*function printList(list) {

 console.log( list.value ); // (1)

 if (list.next) {
 printList(list.next); // (2)
 }

 }*!/
 printList(list);*/


//_8_
/*var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

 function aclean(arr){
 var cleanObj = {};

 for (var i = 0; i < arr.length; i++) {
 var newArr = arr[i].toLowerCase().split('').sort().join('');
 // var key = newArr;
 // cleanObj[key] = true;
 cleanObj[newArr] = arr[i];

 console.log( newArr );
 }
 console.log( cleanObj );

 var cleanArr = [];

 for (var key in cleanObj){
 cleanArr.push(cleanObj[key]);
 }
 return cleanArr;
 console.log( cleanArr );
 }
 console.log( aclean(arr) );*/

//_9_
// объект для коллекции

/*function unique(arr) {
 var store = {};
 for (var i = 0; i < arr.length; i++) {
 var key = arr[i]; // для каждого элемента создаём свойство
 store[key] = true; // значение здесь не важно
 if (store[key] === undefined ){
 return
 }
 }
 console.log( store );

 return Object.keys(store);
 }

 var items = ["кришна", "кришна", "харе", "харе",
 "харе", "харе", "кришна", "кришна", "8-()"
 ];


 console.log( unique(items));*/

//__1_2__
/*var arr = ["Есть", "жизнь", "на", "Марсе"];

 var arrLength = [];
 for (var i = 0; i < arr.length; i++) {
 arrLength[i] = arr[i].length;
 }

 console.log( arrLength ); // 4,5,2,5*/

/*var arr = ["Есть", "жизнь", "на", "Марсе"];

 var arrLength = [];
 var arrLength = arr.map(function(name) {
 return name.length;
 });

 console.log( arrLength ); // 4,5,2,5*/



//Example
/*var wantA = true;
 var myObject = {
 a: 2
 };

 var idx;

 if (wantA) {
 idx = "a";
 }

 // later

 console.log( myObject[idx] ); // 2*/


/*var myObject = { };

 myObject[true] = "foo";
 myObject[3] = "bar";
 b = {key:'c'}
 myObject[b] = "baz";

 console.log(myObject);

 console.log(myObject["true"]);
 console.log(myObject["3"]);
 console.log(myObject["[object Object]"]);
 console.log(myObject[b]);*/


/*var a = {};
 b = {key: 'b',
 key: 'c'
 };
 c = {key: 'c'};
 d = 5;
 a[b]= 123;
 console.log(a);
 // {[object Object]: 123}
 a[c]= 456;
 a[d]= 789;
 console.log(a);
 console.log(a[b]);
 console.log(a[{key: 'b'}]);*/
//Example end


/*function MyType() {

 }
 MyType.prototype = {
 someProperty: 1,
 getSomeProperty: function(){
 return this.SomeProperty;
 }
 };

 var myObj = new MyType();
 console.log(myObj);
 console.log(myObj.someProperty);
 console.log(myObj.getSomeProperty());*/


/*var garage = [];

 function MyCar(name, color, fuel, fuelAmount) {
 this.name = name,
 this.color = color,
 this.fuel = fuel,
 this.fuelAmount = fuelAmount,
 this.info = function(){
 return (this.name + " " + this.color + " " + this.fuel + " " + fuelAmount);
 }
 }
 var car1 = new MyCar('volvo1', 'red', 800, 3300);
 garage.push(car1);

 var car2 = new MyCar('volvo2', 'blue', 900, 2500);
 garage.push(car2);

 var car3 = new MyCar('volvo3', 'green', 1000, 2000);
 garage.push(car3);
 console.log(garage);

 /!*for ( var i = 0; i < garage.length; i++ ){
 console.log(garage[i].info());
 }*!/

 garage.forEach(function(item) {
 console.log(item.info());
 });*/




/*var arr = [4, 2, 6, 5, 3, 9];

 function bubbleSort() {

 for (var i = 0, endI = arr.length - 1; i < endI; i++) {
 for (var j = 0, endJ = endI - i; j < endJ; j++) {

 if (arr[j] > arr[j + 1]) {
 var swap = arr[j];

 arr[j] = arr[j + 1];
 arr[j + 1] = swap;
 }
 }
 }
 return arr;
 console.log(arr);
 }
 console.log(bubbleSort());*/


//_1_ add element in a middle of list

// превращает массив в список
/*function arrayToList(...numbers) {
 return numbers.reduceRight(function(list, number) {
 return {
 number: number,
 next: list
 };
 }, null);
 }

 var list = arrayToList(1, 2, 3, 4, 5, 7, 8, 9);
 console.log(list);*/

// var list = { number: 1 };
// list.next = { number: 2 };
// list.next.next = { number: 3 };
// list.next.next.next = { number: 4 };
// list.next.next.next.next = { number: 5 };
// list.next.next.next.next.next = { number: 7 };
// list.next.next.next.next.next.next = { number: 8 };
// list.next.next.next.next.next.next.next = { number: 9 };


/*function insert(node, list) {
 if (list.number == node) // узел уже есть
 return "node " + node + " already exists in the list!";

 var cur = list;
 while (!(cur.number < node && cur.next.number > node || cur.next == null)) cur = cur.next;
 cur.next = {
 number: node,
 next: cur.next
 }
 return list;
 }
 console.log(insert(6, list));*/

