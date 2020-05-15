const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const screenCalc = document.querySelector('.screen');
const clearAll = document.querySelector('.clear-all');

let statement;

function actionOperations(action){
  if (action == 'disable'){
    operation.forEach((item, i) => {
      item.setAttribute("disabled", true);
    });
  }
  if (action == 'remove'){
    operation.forEach((item, i) => {
      item.removeAttribute("disabled");
    });
  }
}

numbers.forEach((item, i) => {
  item.addEventListener('click', () => {
    screenCalc.innerHTML += item.value;
    // actionOperations('remove');
  })
});
operation.forEach((item, i) => {
  item.addEventListener('click', () => {
    screenCalc.innerHTML += item.value;
    actionOperations('disable');
  })
});
equals.addEventListener('click', () => {
  statement = screenCalc.innerHTML;
  screenCalc.innerHTML = eval(statement);
  actionOperations('remove');
})
clearAll.addEventListener('click', () => {
  statement = '';
  screenCalc.innerHTML = '';
  actionOperations('remove');
})
