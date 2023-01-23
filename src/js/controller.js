import listView from './views/listView';

const controlInputData = function (inputValues) {
  listView.render(inputValues);
};

const init = function () {
  listView.getInputData(controlInputData);
};

init();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const date = new Date(2023 - 01 - 06);
console.log(months[date.getMonth()] + ' ' + date.getFullYear());
