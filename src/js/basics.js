'use strict';

/*var admin;
var name = "Василий";
admin = name;

console.log(admin);

var foo = 1;
console.log(foo);
function bar() {

    if(!foo) {
        console.log(foo);
        var foo = 10;
    }
    alert(foo);
}
bar();
*/


/*
var a = 2;
var x = 1 + (a *= 2);
console.log(x);

// operator if
if ("0") {
    console.log( 'Привет' );
}*/

/*var company = prompt('Каково "официальное" название JavaScript?', '');

if (company == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? "ECMAScript"!');
}*/

/*
var message = prompt('введите число', '');

if (message > 0) {
    message = '1';
} else if (message < 0) {
    message = '-1';
} else {
    message = '0';
}

alert( message );


var message = prompt('логин', '');
var loginMessage;

if (message == 'Админ') {
    loginMessage = prompt('пароль', '');
    if (loginMessage == 'Чёрный Властелин'){
        alert( 'Добро пожаловать!' );
    } else if (loginMessage == null ) {
        alert( 'Вход отменён' );
    } else {
        alert( 'Пароль неверен' );
    }
} else if (message == null) {
    alert( 'Вход отменён');
} else {
    alert('Я вас не знаю');
}*/


/*var result;
var a = 1, b = 3;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

alert(result);

var result;
var a = 1, b = 1;

result = (a + b < 4) ? alert('Мало') : alert('Много');
 */

/*var message;

if (login == 'Вася') {
    message = 'Привет';
} else if (login == 'Директор') {
    message = 'Здравствуйте';
} else if (login == '') {
    message = 'Нет логина';
} else {
    message = '';
}*/

/*var login = '';

var message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте!' :
    (login == '') ?  'Нет логина' :
    '';

alert( message );*/


/*alert( alert(1) || 2 || alert(3) );*/


/*var age = 15;
if ( age >= 14 && age <= 90 ) {
    alert ('true')
} else {
    alert ('false')
}*/

/*if (!(age >= 14 && age <= 90))*/
/*var age = 15;
if ( age <= 14 || age >= 90 ) {
    alert ('true')
} else {
    alert ('false')
}*/

/*
var age = 13;
if ( !(age > 14) || !(age < 90) ) {
    alert ('true')
} else {
    alert ('false')
}*/

/*var a = "" + 1 + 0;      //'10'
console.log(a)
typeof (a)
"" - 1 + 0          //-1
true + false        //1
6 / "3"             //2
"2" * "3"           //6
4 + 5 + "px"        //'9px'
"$" + 4 + 5         //'$45'

"4" - 2             //2

"4px" - 2           //NaN

7 / 0               //Infinity  ?

"  -9\n" + 5        //' -9\n5'
"  -9\n" - 5        //-14
5 && 2              //2

2 && 5              //5

5 || 0              //5

0 || 5              //5
null + 1            //1
undefined + 1       //NaN
null == "\n0\n"     //false
+null == +"\n0\n"   //true*/


/*for (var i = 2; i < 10; i++) {

    if (i % 2 == 0) {
        alert(i)
    };
}*/
/*for (var i = 10; i > 4; i--) {

 if (i % 2 == 0) {
 alert(i)
 };
 }*/

/*for (var i = 0; i < 3; i++) {
    alert( "номер " + i + "!" );
}*/

/*var i = 0;
while (i < 3) {
    alert( "номер " + i + "!" );
    i++;
}*/




/*while (true) {

    var value = prompt("Введите число", '');

    if (value > 100 || value == null){
        break
    }
}

                                            ??*/



//ToDo
/*outer: for (var i = 2; i < 10; i++) {
 for ( var j = 2 ; j < i; j++) {

 if (i % j == 0) continue outer;
 }
 console.log(i);

 }*/


/*for (var i = 5; i < 10; i++) {
    for ( var j = 2 ; j < i; j++) {
        console.log(i, j);
    }
}*/


/*var browser = prompt("Введите arg?")
switch (browser) {
    case 'IE':
        alert( 'О, да у вас IE!' );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Да, и эти браузеры мы поддерживаем' );
        break;

    default:
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}*/


/*var browser = prompt("Введите arg?");
    if (browser == 'IE') {
        alert( 'О, да у вас IE!' );
    } else if (browser == 'Chrome' || browser == 'Firefox') {
        alert('Да, и эти браузеры мы поддерживаем');
    }else {
        alert( 'Мы надеемся, что и в вашем браузере все ок!' );
    }*/

/*var a = +prompt('a?', '');

switch (a) {
    case 0 :
        alert( 0 );
        break;

    case 1 :
        alert( 1 );
        break;

    case 2 :
    case 3 :
        alert( '2,3' );
        break;

    default:
        alert( 'Неизвестное значение: ' + a )

}*/

/*if (a == 0) {
    alert( 0 );
}
if (a == 1) {
    alert( 1 );
}

if (a == 2 || a == 3) {
    alert( '2,3' );
}*/

/*function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert( "Фильм не для всех" ); // (*)
    // ...
}

var age = prompt('Ваш возраст?');

if (checkAge(age)) {
    alert( 'Доступ разрешен' );
} else {
    alert( 'В доступе отказано' );
}*/

//ToDo function example start
/*var test = function sayHi(name)  {
 sayHi = "тест"; // попытка перезаписи
 alert( sayHi ); // function... (перезапись не удалась)
 };

 test();
 */

/* function greet(who) {
 console.log("Привет, " + who);
 }
 greet("Семён");
 console.log("Покеда");*/

/*
 function sayHi() {   // (1)
 alert( "Привет" );
 }
 sayHi();
 var func = sayHi;    // (2)
 func();*/
//ToDo function example end


/*var age = prompt('Сколько вам лет?');

 var sayHi;

 if (age >= 18) {
 sayHi = function() {
 alert( 'Прошу Вас!' );
 }
 } else {
 sayHi = function() {
 alert( 'До 18 нельзя' );
 }
 }
 sayHi();*/

/*function power(base, exponent) {
    if (exponent == undefined) {
        exponent = 2;
    }
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(4));
console.log(power(4, 3));*/

/*function wrapValue(n) {  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var localVariable += n;
    return function(n) {
        localVariable +=n;
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1(5));
console.log(wrap1(6));
// → 1
console.log(wrap2());
// → 2*/

/*function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var twice = multiplier(2);
console.log(twice(5));
// → 10*/

//ToDo function example end

/*var foo = 1;

function bar() {

    if(!foo) {

        var foo = 10;
    }
    alert(foo);

}
bar();*/

/*var age = 0;
var test = checkAge(19);

function checkAge(age) {
    var ret = age > 18 ? age: false;
    return ret;
}

console.log(test);
console.log( checkAge() );*/

/*function checkAge(age) {
    return  (age > 18) ? true : confirm('Родители разрешили?');

}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');

}*/


/*function min(a, b) {

    if ( a > b ) {
        return b;
    } else {
        return a;
    }
}
//var test = min(2, 5);
var test = min(1, 1);

console.log(test)*/
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

//ToDo last task in functions



//example
/*function pow(x, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

alert( pow(2, 3) );*/


/*sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
    ...
    sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050*/

/*function sumTo(n) {
    var result = 0;
    for (var i = 1; i < n; i++){
        result += i;
    }
    return result;
}

alert( sumTo(100) );                ??*/


/*function sumTo(n) {
    if (n > 1) {
        return n = n + sumTo(n-1)

    } else {
        return n;
    }
}

alert( sumTo(1) );*/

/*
function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

alert( sumTo(100) );*/


//examples

/*var power = function(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log(power(2, 10));
var x = "outside";
console.log(x);
var f1 = function() {
    var x = "inside f1";
};
f1();
console.log(x);
// → outside

var f2 = function() {
    x = "inside f2";
};
f2();
console.log(x);*/

//examples end



//ToDo numbers

/*var valueA = prompt("введите первое число", '10');
var numberA = +valueA;
var valueB = prompt("введите второе число", '-25');
var numberB = +valueB;

function sum() {
    var c = numberB + numberA;
    alert (c);
}
sum();*/


//ToDo string

/*ucFirst("вася") == "Вася";
ucFirst("") == ""; // нет ошибок при пустой строке
toUpperCase() и charAt().*/


/*function ucFirst(str){
    alert( str );
    alert( "Интерфейс".toUpperCase() );
}*/


/*var str = 'вася';
var first = str.charAt(0).toUpperCase();
var second = str.substring(1);
var newStr = first + second;

console.log(first);
console.log(second);
console.log(newStr);*/

/*function ucFirst(str) {

    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("") );*/

//ToDo objects
// Examples
//     Создайте пустой объект user.
//     Добавьте свойство name со значением Вася.
//     Добавьте свойство surname со значением Петров.
//     Поменяйте значение name на Сергей.
//     Удалите свойство name из объекта.

/*var user = {};

user.name = 'Вася';
user.surname = 'Петров';
console.log(user.name)

user.name = 'Сергей';
console.log(user.name)

delete user.name;

console.log(user.name)*/

//Example start
/*var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};

for (var key in menu) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение

    alert( "Ключ: " + key + " значение: " + menu[key]  );
}*/


/*var user = {
    name: "Вася",
    surname: "Петров"
};
user.age = 25;

for (var prop in user) {
    alert( prop ); // name, surname, age
}*/
//Example end


//ToDo objects
//_1_
/*function isEmpty(obj) {
    for (var item in schedule) {
        alert( item );
    }
 }

 var schedule = {};
 alert( isEmpty(schedule) ); // true

 schedule["8:30"] = "подъём";
 alert( isEmpty(schedule) ); // false*/

//_2_
/*var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
var sum = 0;
for (var name in salaries) {
    sum += salaries[name];
}
alert(sum);*/

//_3_
/*var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var max = 0;
var maxName = 0; //var maxName = '';
for (var name in salaries) {
    if (max < salaries[name]) {
        max = salaries[name];
        maxName = name;
    }
}

alert( maxName || "нет" );*/

/*function isEmpty(obj) {
    for (var name in salaries) {
        salaries[name] > salaries[name];
    }
}*/


//Example start


/*function calculate(){
    var a = 3, b = 5;

    function calculateInner(a){
        var b = 7, c = 11;
        a += b + c;
        console.log('a =', a, '; b = ', b);
    };
    calculateInner(a);
    console.log('a =', a, '; b = ', b);
}
calculate();*/

/*var from = "Маша";

function showMessage(from, text) {
    from = '**' + from + '**'; // меняем локальную переменную from

    console.log( from + ': ' + text );
    return from;
}

showMessage(from, "Привет");
console.log( from ); // старое значение from без изменений, в функции была изменена копия*/



//Task _2_ end


