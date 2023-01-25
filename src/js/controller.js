import listView from './views/listView';
import * as model from './model';

const controlLoadData = function () {
  model.fetchBookmarks();

  if (model.state.entries.length > 0) listView.render(model.state.entries);
};

const controlInputData = function (inputValues) {
  model.pushEntry(inputValues);
  model.fetchBookmarks();
  listView.render(model.state.entries);
};

const init = function () {
  controlLoadData();
  listView.getInputData(controlInputData);
};

init();
