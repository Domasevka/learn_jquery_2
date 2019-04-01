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
    console.log('#cookPie:1', args.length);
    console.log('#cookPie:2', Array.isArray(args));
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

lemonPie.cookPie = cookPie;
chocoPie.cookPie = cookPie;

console.log(lemonPie); //{type: "lemon", cookPie: ƒ}

lemonPie.cookPie();
chocoPie.cookPie();

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

const chocoPie = Pie('choco', 24);
chocoPie.cook();*/

//__5__ex

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
 console.log(chocoPie);*/

//#cookPie choco 17

//__7__ex_call

// function cookPie(radius, slice){
//     console.log('#cookPie', this.type, radius, slice);
// }
// const lemonPie = {type: 'lemon', radius: 9};
// cookPie.call(lemonPie, 14, false);
//  console.log(lemonPie);

//__8__ex_apply


//__9__ex_bind
/*function cookPie(radius, slice){
    console.log('#cookPie', this.type, radius, slice);
}

const lemonPie = {type: 'lemon', radius: 9 };

const cookLemonPie = cookPie.bind(lemonPie);
cookLemonPie(47, true);

const cookHugeLemonPie = cookPie.bind(lemonPie, Number.MAX_SAFE_INTEGER);
cookLemonPie(false);*/

//function end

//Example end

//ToDo this
// _1_
/*var arr = ["a", "b"];

 arr.push(function() {
 alert( this );
 })

 arr[2]();*/
// _2_
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
console.log( "Произведение=" + calculator.mul() );*/

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


//_8_?????
/*var
    arr = ["воз", "зов"];
function aclean(arr){
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








