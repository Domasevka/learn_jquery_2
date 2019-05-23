class TodoList {
  constructor(wrapperSelector, data = []) {
    this.id = wrapperSelector;
    this.wrapper = document.querySelector(this.id);

    this.list = [];
    this.input = this.createInput();
    this.wrapper.appendChild(this.input);

    const button = this.createButton();
    this.wrapper.appendChild(button);

    this.taskList = this.createTaskList();
    this.wrapper.appendChild(this.taskList);
    this.addRemoveListener();

    this.lsData = JSON.parse(localStorage.getItem('todoList'));

    const tmpData = this.hasTasks() ?
      this.lsData[this.id]
      : data;

    this.createTasks(tmpData);
  };

  hasTasks() {
    return this.lsData && this.lsData[this.id] && this.lsData[this.id].length;
  }

  createInput = () => {
    const listInput = document.createElement('input');
    listInput.className = "list__input";
    return listInput
  };

  createButton = () => {
    const listBtn = document.createElement('button');
    listBtn.className = "btn btn_blue btn_sm";
    const btnText = document.createTextNode("Add");
    listBtn.appendChild(btnText);
    listBtn.onclick = () => {
      let inputValue = this.input.value;
      if(inputValue === ''){
        alert("Add your note");
      } else {
        this.createNewTask(inputValue);
        this.input.value = "";
      }
    };
    return listBtn;
  };

  createTaskList = () => {
    const listUl = document.createElement('ul');
    listUl.className = "list__group";
    return listUl;
  };

  createNewTask(value) {
    let taskText = document.createTextNode(value);
    let itemTextInner = document.createElement("span");
    itemTextInner.className = "list__text";
    itemTextInner.appendChild(taskText);

    let listRowItem = document.createElement("li");
    listRowItem.className = "list__item";

    listRowItem.appendChild(itemTextInner);

    let addBtn = document.createElement("span");
    addBtn.className = "btn-cancel";
    let btnIcon = document.createTextNode("\u00D7");
    addBtn.appendChild(btnIcon);

    listRowItem.appendChild(addBtn);
    this.taskList.appendChild(listRowItem);

    this.list.push(value);
    this.uploadTasks();
  }

  createTasks(data) {
    for (let i = 0; i < data.length; i++) {
      this.createNewTask(data[i]);
    }
  }

  addRemoveListener() {
    this.taskList.addEventListener('click', evt => {
      let clickedRow = evt.target;
      if (clickedRow.matches('.btn-cancel')){
        const itemText = clickedRow.parentNode.firstElementChild.textContent;
        const foundIndex = this.list.indexOf(itemText);
        this.list.splice(foundIndex, 1);
        clickedRow.parentNode.remove();
        this.uploadTasks();
      }
    });
  }

  uploadTasks() {
    if(!this.lsData) {
      this.lsData = {};
    }
    this.lsData[this.id] = this.list;
    localStorage.setItem('todoList', JSON.stringify(this.lsData));
  }
}

const getPeople = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(rawData => {
      const newUsers = rawData.map(user => user['name']);
      firstTodolist.createNewTask(user['name']);
    });
};

const firstTodolist = new TodoList('.first-wrapper');

if (!firstTodolist.hasTasks()) {
  getPeople('https://jsonplaceholder.typicode.com/users/');
}
// const secondTodolist = new TodoList('.second-wrapper', ['one','two', 'four']);



