'use strict';
/*
//let inc = x => x+1;
//let inc = function(x) { return x + 1; };
//__1__
class Group {
  constructor(students) {
    this.students = students;
  }
  removeStudent = (name) => {
    if (this.studentsCount()) {
      this.students.shift()
    }else (console.log('no students'))
  };

  addStudent = (name) => { this.students.push(name) };

  studentsCount() {
    return this.students.length > 0
  }
}

let students = new Group(["Вася", "Петя", "Даша"]);//[]
console.log(students.students);

students.addStudent("Маша");
console.log(students.students);

students.removeStudent();
console.log(students.students);

students.removeStudent();
console.log(students.students);

students.removeStudent();
console.log(students.students);

students.removeStudent();
console.log(students.students);

students.removeStudent();
console.log(students.students);
*/


//__2__
/*class User {
  getFullName(){
    return this.name + ' ' + this.surname;
  }
}
var user = new User;
user.name = 'Вася';
user.surname = 'Иванов';

console.log(user.getFullName());*/

//__3__
/*class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  getFullName(){
    return this.name + ' ' + this.surname;
  }
}
var user = new User('Вася', 'Иванов');
console.log(user.name);
user.name = 'Иван';
console.log(user.getFullName());*/

//__4__
/*class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  getName(){
    return this.name;
  }
  getFullName(){
    return this.name + ' ' + this.surname;
  }
}
var user = new User('Вася', 'Иванов');
console.log(user.getName());

console.log(user.getFullName());*/

//__5__
/*class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  getName(){
    return this.name;
  }
  getFullName(){
    return this.name + ' ' + this.surname;
  }

  setAge(age){
    if (age > 0 && age < 100)
    this._age = age;
  }
  getAge(){
    return this._age;
  }
}
var user = new User('Вася', 'Иванов');
user.setAge(125);
console.log(user.getAge());
console.log(user.getFullName());*/

//__6__
/*class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }
  getName(){
    return this.name;
  }
  getFullName(){
    return this.name + ' ' + this.surname;
  }

  setAge(age){
    if (this._checkAge(age))
      this._age = age;
  }

  _checkAge(age){
    if (age > 0 && age < 100){
      return true;
    }else {
      return false;
    }
  }
  getAge(){
    return this._age;
  }
}

var user = new User('Вася', 'Иванов');
user.setAge(25);
console.log(user.getAge());*/

//__7__
/*class User {
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  getFullName(){
    return this.name + ' ' + this.surname;
  }
}

class Worker extends User {
  constructor(name, surname, rate, days){
    super(name, surname);
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return (this.rate * this.days);
  }
}
var worker = new Worker('Вася', 'Иванов', 10, 30);
console.log(worker.getFullName());
console.log(worker.getSalary());*/


//Classes in js (GOOD)Functions
/*function LegoMan(name){
  this.name = name;
}
LegoMan.prototype.say = function(message){
  console.log(this.name + ': "' + message + '"');
}
var alex = new LegoMan('Alex');
alex.say('Hello, Kattie!');

var kattie = new LegoMan('Kattie');
kattie.say('No');*/

/*
//Classes in js Functions
//__1__
function LegoMan(name){
  this.name = name;
}

LegoMan.prototype.say = function(message){
  console.log(this.name + ': "' + message + '"');
}
var alex = new LegoMan('Alex');
*/

//Classes in JS ES2015 Classes
//__1__
/*class LegoMan {
  constructor(name){
    this.name = name;
  }

  say(message){
    console.log(this.name + ': "' + message + '"');
  }
}*/

/*const lemonPie = {
  type: 'lemon',
  radius: 46,
  cook: function() {
    const fatCook = () => {console.log('#fatCookPie', this)};

      fatCook();
  }
};
lemonPie.cook();
//#fatCookPie {type: "lemon", radius: 46, cook: ƒ}*/





