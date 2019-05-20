/*
 var arr = [-4, 2, -6, 5, 5, 6,333, 0];

 function bubbleSort(arr) {
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
 }
 console.log(bubbleSort(arr));
*/

//_3_ add element at list start ????????????
/*var list = { value: 1 };
 list.next = { value: 2 };
 list.next.next = { value: 3 };
 list.next.next.next = { value: 4 };

function insert(node, list) {

  var cur = list;
  cur.next = {
      value: node,
      next: cur.next
  };

  return list;
 }
 console.log(insert(6, list));*/

//_2_ add element in list end

/*var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4, next: null };

function insert(node, list) {
    var cur = list;
    while (cur.next !== null) {
        cur = cur.next;
    }
    cur.next = node;

    return list;
}
var List = insert({value: 6, next: null}, list);
console.log(List);
var cur = List;
do  {
    console.log(cur);
    cur = cur.next;
} while (cur !== null)

var List2 = {value : 10, next: List};

console.log('-----------');
var cur = List2;
do  {
    console.log(cur);
    cur = cur.next;
} while (cur !== null)*/

// 3) бинарный поиск
//_1_ex
/*function binarySearch(list, item){
    var low = 0;
    var high = my_list.length - 1;

    while (low <= high){
        mid = Math.floor((low + high)/2);
        //var mid = (low + high)/2
        var guess = my_list[mid]
        if (guess == item){
            return mid;
        }else if(guess > item){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return -1 ;
}

var my_list = [1, 3, 5, 7, 9];
console.log(binarySearch(my_list, 4));*/

//4) является ли фраза полиндромом
//_1_
/*function checkPalindrome(inputString) {

    var inputString = inputString.replace(/ /g, '').toLowerCase();

    console.log(inputString);

    if(inputString.length == 1){
        return true;
    }else{
        var i = 0;
        var j = inputString.length-1;
        while(i < j){
            if(inputString[i] != inputString[j]){
                return false;
            }
            i++;
            j--;
        }
    }
    return true;
}
checkPalindrome('Avid diva');

console.log(checkPalindrome('Avid diva'));*/

// 5) является ли число простым?
/*function showMePrimeNumbers(max){
    var primes = [];
    for(var i = 2; i < max; i++){
        var primeNumberDividers = []; //there should only be 2: 1 & number
        for(var j = 1; j <= i; j++){
            if(i % j === 0){
                primeNumberDividers.push(j);
            }
        }
        if(primeNumberDividers.length === 2){
            primes.push(i);
        }
    }
    console.log(primeNumberDividers);
    return primes;
}

console.log(showMePrimeNumbers(100));*/
//[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// 6) найти НОД
/*function showNod(a, b){
    var nodNumbersFirst = [];

    for(var j = 1; j <= a; j++){
        if(a % j === 0){
            nodNumbersFirst.push(j);
        }
    }
    console.log(nodNumbersFirst);

    var nokNumbersSecond = [];
    for(var i = 1; i <= b; i++){
        if(b % i === 0){
            nodNumbersSecond.push(i);
        }
    }
    console.log(nokNumbersSecond);

    var matches = [];
    for (var c = 0; c < nodNumbersFirst.length; c++) {
        for (var e = 0; e < nodNumbersSecond.length; e++) {
            if (nodNumbersFirst[c] === nodNumbersSecond[e]) matches.push(nodNumbersFirst[c]);
        }
    }
    var lastItem = matches[matches.length - 1];
    return lastItem;

}
console.log(showNod(28, 16));*/

// 6) найти НОК
/*function showNok(a, b){
    var nokNumbersFirst = [];

    for(var j = 1; j <= a; j++){
        var produktFirst = j * a;
        nokNumbersFirst.push(produktFirst);
    }
    console.log(nokNumbersFirst);

    var nokNumbersSecond = [];
    for(var i = 1; i <= b; i++){
        var produktSecond = i * b;
        nokNumbersSecond.push(produktSecond);

    }
    console.log(nokNumbersSecond);

    var matches = [];
    for ( var c = 0; c < nokNumbersFirst.length; c++ ) {
        for ( var e = 0; e < nokNumbersSecond.length; e++ ) {
            if ( nokNumbersFirst[c] === nokNumbersSecond[e] ) matches.push( nokNumbersFirst[c] );
        }
    }
    var firstItem = matches[0];
    return firstItem;
}
console.log(showNok(9, 12));*/


//_1_нули
/*function findLength(arr){
  var maxLength = 0;
  var interLength = 0;
  var startPosition = 0;
    for(var j = 0; j<= arr.length; j++){
      if(arr[j] === 0){
        interLength += 1;
      }else {
        if(interLength > maxLength){
          maxLength = interLength;
          startPosition = j - interLength;
          console.log(startPosition)
        }
        interLength = 0;
      }
  }
  return (startPosition + ' ' + maxLength);
}

console.log(findLength([0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0]));*/


//_2_арбузы
/*function findMelons(melons) {
  var largestMelon = melons[0];
  var smalestMelon = melons[0];
  for(var i = 0; i < melons.length; i++){
    if (melons[i] > largestMelon){
      largestMelon = melons[i];
    }else if(melons[i] < smalestMelon){
      smalestMelon = melons[i];
    }
  }
  return (largestMelon + " " + smalestMelon);
}
console.log(findMelons([5, 1, 6, 5, 9]));*/


//_3_coins
/*function countCoins(coins) {
let coinOne = 0;
let coinSecond = 0;
for(let i = 0; i < coins.length; i++){
  if (coins[i] === 0){
    coinOne++;
  }else{
    coinSecond++;
  }
}
  return (Math.min(coinOne, coinSecond))
}
console.log(countCoins([1, 0, 1, 1, 0]));*/


//_4_queue
/*function queueCount(number) {
  var minutes = 0;
  var hours = 0;

  var allTime = (number * 5) - 5;
  while (allTime < 250){
    if (allTime < 60){
      minutes = allTime;
      return minutes;
    }else if(allTime >= 60){
      hours = Math.trunc(allTime / 60);
      minutes = (allTime % 60);
      return (hours + ':' + minutes);
    }
  }
  return ('NO');
}
console.log(queueCount(21));*/


//arrow functions
/* const lemonPie = {
     type: 'lemon',
     radius: 46,
     cook: function() {
         const fatCook = () => {console.log('#fatCookPie', this);}
         fatCook();
     }
 };

lemonPie.cook();
chocoPie.cook();*/
//#cookPie undefined undefined
//#cookPie undefined undefined


//_1_
/*let sum = (a,b) => a + b;
// аналог с function
// let sum = function(a, b) { return a + b; };
alert( sum(1, 2) ); // 3*/


//_2_
/*let group = {
    students: ["Вася", "Петя", "Даша"],

    addStudents: function() {
        const addStudent = () => {console.log(this.students.push("Маша")); }
        addStudent();
        console.log(this.students)
    }
}
group.addStudents();*/


/*function User(name) {
    this.name = name;
}
User.prototype.sayHi = function() {
    alert(this.name);
};*/
/*
addAndRemove() {
    /!*this.students = this.students.push("Маша");
     console.log(this.students);*!/
}*/






//Пример создания метода в конструкторе
/*function User(name) {
  this.name = name;

  //метод
  this.sayHi = function() {
    console.log( "Моё имя: " + this.name );
  };
}
var ivan = new User("Иван");
ivan.sayHi(); // Моё имя: Иван
*/
/*
 ivan = {
 name: "Иван",
 sayHi: функция
 }
 */



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
 lemonPie.cook();*/
//Pie {type: "lemon", radius: 38, cook: ƒ}

