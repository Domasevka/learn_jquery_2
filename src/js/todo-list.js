'use strict';
/*var toDo;
 function toSaveLocal() {
 toDo = list.innerHTML;
 localStorage.setItem('toDo', toDo);
 }
var toDolist = document.getElementsByTagName("li");
var listItem;
for (listItem = 0; listItem < toDolist.length; listItem++) {
  var addBtn = document.createElement("span");
  var btnIcon = document.createTextNode("\u00D7");
  addBtn.className = "btn-cancel";
  addBtn.appendChild(btnIcon);
  toDolist[listItem].appendChild(addBtn);
}

var closeBtn = document.getElementsByClassName("btn-cancel");
var i;
for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function() {
    var listRow = this.parentElement;
    listRow.style.display = "none";
  }
}

//a new list item
function newElement() {
  var listRowItem = document.createElement("li");
  listRowItem.className = "list__item";
  var inputField = document.getElementById("listInput").value;
  var inputText = document.createTextNode(inputField);
  listRowItem.appendChild(inputText);
  if (inputField === '') {
    alert("Add your note");
  } else {
    document.getElementById("list").appendChild(listRowItem);
  }
  document.getElementById("listInput").value = "";

  var addBtn = document.createElement("span");
  var btnIcon = document.createTextNode("\u00D7");
  addBtn.className = "btn-cancel";
  addBtn.appendChild(btnIcon);
  listRowItem.appendChild(addBtn);

  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
      var listRow = this.parentElement;
      listRow.style.display = "none";
      toSaveLocal();
    }
  }
  toSaveLocal();
}

if(localStorage.getItem('toDo')){
  list.innerHTML = localStorage.getItem('toDo');
}
 */





var listId = "list";
var inputField = document.getElementById("listInput");

var theList = [];
//a new list item

function createLiElement(idHTML, value) {
  //document.getElementById(idHTML).appendChild(listRowItem);
  var inputText = document.createTextNode(value);
  var listRowItem = document.createElement("li");
  listRowItem.className = "list__item";

  listRowItem.appendChild(inputText);

  var btn = createRemoveBtn();

  listRowItem.appendChild(btn);

  document.getElementById(idHTML).appendChild(listRowItem);

  // document.getElementById("list").appendChild(listRowItem);
}

function createRemoveBtn() {
  var addBtn = document.createElement("span");
  addBtn.className = "btn-cancel";
  var btnIcon = document.createTextNode("\u00D7");
  addBtn.appendChild(btnIcon);

  return addBtn;
}

  function newElement() {
    var inputField = document.getElementById("listInput").value;
    if (inputField === '') {
      alert("Add your note");
    } else {
      createLiElement(listId, inputField);
      document.getElementById("listInput").value = "";
      theList.push(inputField);
      toSaveLocal();
    }
  }

  function addRemoveListener() {
    document.getElementById(listId).addEventListener('click', function (evt) {
      var clickedButton = evt.target.parentNode;
      clickedButton.remove();
      theList.splice(clickedButton, 1);
      toSaveLocal();
    });
  }
addRemoveListener();
function toSaveLocal() {
    localStorage.setItem("newElement", JSON.stringify(theList));
  }

function printStorage() {
    var storedTodoList = JSON.parse(localStorage.getItem("newElement"));
    console.log(storedTodoList);
    theList = storedTodoList;
    for (var i = 0; i < storedTodoList.length; i++) {
      createLiElement(listId, storedTodoList[i]);
      console.log(storedTodoList[i]);
    }

  }

printStorage();

var data = JSON.parse(localStorage.getItem("newElement"));
var todo1 = new ToDoList('todo1', data);



