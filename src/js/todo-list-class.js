class TodoList {
  constructor(wrapperSelector, data = []) {
    this.wrapper = document.querySelector(wrapperSelector);
    this.list = data;
    this.input = this.createInput();
    this.wrapper.appendChild(this.input);

    const button = this.createButton();
    this.wrapper.appendChild(button);

    this.taskList = this.createTaskList();
    this.wrapper.appendChild(this.taskList);
    this.addRemoveListener();
    this.loadTasks();
    //this.createNewTask
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

  createNewTask(inputValue) {
    let taskText = document.createTextNode(inputValue);

    let listRowItem = document.createElement("li");
    listRowItem.className = "list__item";

    listRowItem.appendChild(taskText);

    let addBtn = document.createElement("span");
    addBtn.className = "btn-cancel";
    let btnIcon = document.createTextNode("\u00D7");
    addBtn.appendChild(btnIcon);

    listRowItem.appendChild(addBtn);
    this.taskList.appendChild(listRowItem);
  };

  addRemoveListener() {
    this.taskList.addEventListener('click', evt => {
      let clickedRow = evt.target.parentNode;
      clickedRow.remove();
      //theList.splice(clickedButton, 1);
      //toSaveLocal();
    });
  }
  loadTasks() {
    let loadTask = this.list;
    for (let i = 0; i < loadTask.length; i++) {
      let taskText = document.createTextNode(loadTask[i]);

      let listRowItem = document.createElement("li");
      listRowItem.className = "list__item";

      listRowItem.appendChild(taskText);

      let addBtn = document.createElement("span");
      addBtn.className = "btn-cancel";
      let btnIcon = document.createTextNode("\u00D7");
      addBtn.appendChild(btnIcon);

      listRowItem.appendChild(addBtn);
      this.taskList.appendChild(listRowItem);
    }
  }
}

const firstTodolist = new TodoList('.first-wrapper', ['one','two']);
const secondTodolist = new TodoList('.second-wrapper', ['one','two', 'four']);


