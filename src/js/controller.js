import listView from './views/listView';

const controlInputData = function (inputValues) {
  listView.render(inputValues);
};

const init = function () {
  listView.getInputData(controlInputData);
};

init();
