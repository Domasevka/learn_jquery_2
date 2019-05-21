'use strict';

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
//var todo1 = new ToDoList('todo1', data);




