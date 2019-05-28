class TodoList {
  constructor(wrapperSelector, data = []) {
    this.id = wrapperSelector;
    this.wrapper = document.querySelector(this.id);

    this.list = [];
    //let newTask = {};
    console.log(this.list);
    this.input = this.createInput();
    //this.date = this.createDate('jan,16,2013,00:00:00');
    //this.timeout = setInterval(this.date, 1000);
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
    this.taskDate = this.createDate();

    this.getDate();
  };

  hasTasks() {
    return this.lsData && this.lsData[this.id] && this.lsData[this.id].length;
  }

  createInput() {
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
        //this.createNewTask({value: inputValue, date: new Date()});
        this.createNewTask({value: inputValue, date: this.taskDate});

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

  createNewTask(data) {
    let newTask = {};
    newTask.name = data.value;
    newTask.date = data.date;
    newTask.id = data.id;
    //console.log(newTask);

    let taskText = document.createTextNode(data.value);
    let itemTextInner = document.createElement("span");
    itemTextInner.className = "list__text";
    itemTextInner.appendChild(taskText);

    let listRowItem = document.createElement("li");
    listRowItem.setAttribute("id", "list__item");
    listRowItem.className = "list__item";

    listRowItem.appendChild(itemTextInner);

    let timeText = document.createTextNode(data.date);
    let addTime = document.createElement("span");
    addTime.className = "list__time";
    addTime.appendChild(timeText);

    listRowItem.appendChild(addTime);

    //let countText = document.createTextNode();
    let addCount = document.createElement("span");
    addCount.className = "list__count";
    //addCount.appendChild(countText);

    listRowItem.appendChild(addCount);

    let addBtn = document.createElement("span");
    addBtn.className = "btn-cancel";
    let btnIcon = document.createTextNode("\u00D7");
    addBtn.appendChild(btnIcon);

    listRowItem.appendChild(addBtn);
    this.taskList.appendChild(listRowItem);

    this.list.push(newTask);
    this.uploadTasks();
  }

  createTasks(data) {
    for (let i = 0; i < data.length; i++) {

      this.createNewTask({ value: data[i].name, date: data[i].date, id: data[i].id});
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

  createDate() {
    let nowDate = new Date(),
        //years  = nowDate.getFullYear(),
        //months = nowDate.getMonth(),
        //days   = nowDate.getDate(),
        hours = nowDate.getHours(),
        mins = nowDate.getMinutes(),
        secs = nowDate.getSeconds();
    //let dateRow = years + ' ' + ',' + ' ' + months + ' ' + ',' + ' ' + days + ' ' + ',' + ' ' + hours + ' ' + ':' + ' ' + mins + ' ' + ':' + ' ' + secs;
    let dateRow = hours + ' ' + ':' + ' ' + mins + ' ' + ':' + ' ' + secs;
    return dateRow;
  };

  getDate() {
    for (let i = 0; i < this.list.length; i++) {

      console.log(this.list[i].date)
    }

  };
}

const getPeople = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(rawData => {
      //first example to create new object
      const newUsers = rawData.map(user => {
            return { id: user.id, name: user.name, date: new Date()}
            //return { id: user.id, name: user.name, date: firstTodolist.createDate()}

      });
      //second example
      //const newUsers = rawData.map(user => ({ id: user.id, name: user.name }));

      //third example
      // const newUsers = rawData.map(newUser => {
      //   const newObject = {};
      //   newObject.id = newUser.id;
      //   newObject.name = newUser.name;
      //   newObject.date = new Date();
      //   return newObject;
      // });
      console.log(newUsers);
      firstTodolist.createTasks(newUsers);
    });
};

const firstTodolist = new TodoList('.first-wrapper');

if (!firstTodolist.hasTasks()) {
  getPeople('https://jsonplaceholder.typicode.com/users/');
}



const updateTime = (countTo) => {
  let nowDate = new Date(),
    countDate = new Date(countTo),
    years  = nowDate.getFullYear() - countDate.getFullYear(),
    months = nowDate.getMonth() - countDate.getMonth(),
    days   = nowDate.getDate() - countDate.getDate(),
    hours = nowDate.getHours() - countDate.getHours(),
    mins = nowDate.getMinutes() - countDate.getMinutes(),
    secs = nowDate.getSeconds() - countDate.getSeconds();
  if (months<0) {
    years--;
    months += 12;
  }
  if (days<0) {
    months--;
    var daysOfMonth = new Date(now.getTime());
    daysOfMonth.setMonth(now.getMonth()+1);
    daysOfMonth.setDate(0);
    days+=daysOfMonth.getDate();
  }
  if (hours<0) {
    days--;
    hours+=24;
  }

  if (mins<0) {
    hours--;
    mins+=60;
  }
  if (secs<0) {
    mins--;
    secs+=60;
  }

  let dateRow = years + ' ' + ',' + ' ' + months + ' ' + ',' + ' ' + days + ' ' + ',' + ' ' + hours + ' ' + ':' + ' ' + mins + ' ' + ':' + ' ' + secs;
  //document.getElementsByClassName('list__time').innerHTML = dateRow;
  return dateRow;
};
setInterval(() => {updateTime('jan,16,2013,00:00:00')}, 1000);



// const secondTodolist = new TodoList('.second-wrapper', ['one','two', 'four']);




