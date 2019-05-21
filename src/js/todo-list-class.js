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
    const tmpData = this.lsData && this.lsData[this.id] && this.lsData[this.id].length ?
      this.lsData[this.id]
      : data;

    this.createTasks(tmpData);
  };

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

    let listRowItem = document.createElement("li");
    listRowItem.className = "list__item";

    listRowItem.appendChild(taskText);

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
      if (clickedRow.classList.contains('btn-cancel')){
        clickedRow.parentNode.remove();
      }

      this.list.splice(clickedRow, 1);
      this.uploadTasks();
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

const firstTodolist = new TodoList('.first-wrapper', ['one','two']);
const secondTodolist = new TodoList('.second-wrapper', ['one','two', 'four']);



