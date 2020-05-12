const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equals = document.querySelector('.equals');
const screenCalc = document.querySelector('.screen');
const clearAll = document.querySelector('.clear-all');

let statement;

numbers.forEach((item, i) => {
  item.addEventListener('click', () => {
    screenCalc.innerHTML += item.value;
  })
});
operation.forEach((item, i) => {
  item.addEventListener('click', () => {
    screenCalc.innerHTML += item.value;
  })
});
equals.addEventListener('click', () => {
  statement = screenCalc.innerHTML;
  screenCalc.innerHTML = eval(statement);
})
clearAll.addEventListener('click', () => {
  statement = '';
  screenCalc.innerHTML = '';
})
