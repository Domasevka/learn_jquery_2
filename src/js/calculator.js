const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');


//hit a number key (0-9)
keys.addEventListener('click', evt => {


  if (evt.target.matches('button')) {
    const сlickedElement = evt.target;
    console.log(сlickedElement);
    const action = сlickedElement.dataset.action;
    const keyContent = сlickedElement.textContent;
    const displayedNum = display.textContent;

    if (action === "add" ||
      action === "substract" ||
      action === "multiply" ||
      action === "divide"
    ){
      сlickedElement.classList.add("is-depressed");
      // Add custom attribute
      calculator.dataset.previousKeyType = 'operator';

      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if(action === 'decimal'){
      display.textContent = displayedNum + '.';
    }

    const previousKeyType = calculator.dataset.previousKeyType;


    if(!action) {
      if (displayedNum === '0' || previousKeyType === 'operator'){
        display.textContent = keyContent;
      }else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if(action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const currentOperator = calculator.dataset.operator;
      const secondValue = displayedNum;
      console.log(secondValue);

      display.textContent = calculate(firstValue, secondValue, currentOperator);
      console.log(previousKeyType);

    }
    function calculate(first, second, operator,){
      let result = '';

      if (operator === "add"){
        result =  +first + +second;
      }else if (operator === "substract"){
        result =  +first - +second;
      }else if (operator === "multiply"){
        result =  +first * +second;
      }else if (operator === "divide"){
        result =  +first / +second;
      }


      console.log(result);
      return result;
    }
    //remove depress
    const arrayKeys = Array.from(keys.parentNode.children);
    arrayKeys.forEach( el => {el.classList.remove("is-depressed") }
    )
  }
});



