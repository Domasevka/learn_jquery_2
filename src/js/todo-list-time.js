class TodoList {
  constructor(wrapperSelector, data = []) {
    this.id = wrapperSelector;
    this.wrapper = document.querySelector(this.id);

    this.list = [];

    console.log(this.list);
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
        this.createNewTask({value: inputValue, date: new Date()});
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
    listRowItem.setAttribute('mr-data', JSON.stringify(data));
    listRowItem.className = "list__item";

    listRowItem.appendChild(itemTextInner);

    let timeText = document.createTextNode(data.date);
    let addTime = document.createElement("span");
    addTime.className = "list__time";
    addTime.appendChild(timeText);

    listRowItem.appendChild(addTime);

    let addCount = document.createElement("span");
    addCount.className = "list__count";

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

  /*createCounter(countTo) {
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

    let dateRow = /!*years + ' ' + ',' + ' ' + months + ' ' + ',' + ' ' + days + ' ' + ',' + ' ' + *!/hours + ' ' + ':' + ' ' + mins + ' ' + ':' + ' ' + secs;
    return dateRow;
  };*/

  createCounter(countTo) {

    let result = dateFns.distanceInWordsToNow(
      new Date(countTo)
    )
    /*let nowDate = (
      new Date(),
      new Date(countTo)
    )*/
    //let nowDate = moment(countTo).startOf('seconds').fromNow();

    //console.log(nowDate);

    return result;
  };



  /*createNewDateFormat(newStr){
    let countDate = new Date(newStr);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let newDateFormat = new Date();

    let dateStr = "Start is: " + days[countDate.getDay()] + ", " + countDate.getDate() + " " + months[countDate.getMonth()] + " " + countDate.getFullYear() + " " + countDate.getHours() +":" + countDate.getMinutes() + ":" + countDate.getSeconds();
    return dateStr;
  }*/

  createNewDateFormat(newStr){

    let countDate = dateFns.format(new Date(newStr), 'MM:DD:YYYY');
    console.log(countDate);

    let dateStr = "Start is: " + countDate;
    return dateStr;
  }

  updateTime(){
    document.querySelectorAll('.list__group li').forEach(it => {

      const data = JSON.parse(it.getAttribute('mr-data'));
      let counterFormat = data.date;
      this.createCounter(counterFormat);
      this.createNewDateFormat(counterFormat);

      it.querySelector('.list__time').innerHTML = this.createNewDateFormat(counterFormat);
      it.querySelector('.list__count').innerHTML = this.createCounter(counterFormat);
    })

  }
}

const getPeople = (url) => {
  fetch(url)
    .then(response => response.json())
    .then(rawData => {
      //first example to create new object
      const newUsers = rawData.map(user => {
            return { id: user.id, name: user.name, date: new Date()}

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



const newTime = (countTo) => {

};
setInterval(() => {

  firstTodolist.updateTime()

  }, 1000);

/*document.querySelectorAll('.list__group li').forEach(function (it) {

  const data = JSON.parse(it.getAttribute('mr-data'));

  console.log(data);
  it.querySelector('.list__time').innerHTML = "3434";
})*/

// const secondTodolist = new TodoList('.second-wrapper', ['one','two', 'four']);




