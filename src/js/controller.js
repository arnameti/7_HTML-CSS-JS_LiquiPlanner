import listView from './views/listView';
import * as model from './model';

const controlLoadData = function() {
  model.fetchBookmarks();


  if (model.state.entries.length > 0) listView.render(model.state.entries);
};

const controlInputData = function(movement) {
  model.pushEntry(movement);

  console.log(model.state.entries);

  model.fetchBookmarks();
  listView.render(model.state.entries);

};

const controlDeleteEntry = function(id) {
  model.deleteEntry(id);
  model.fetchBookmarks();
  listView.render(model.state.entries);
};

const init = function() {
  controlLoadData();
  listView.getInputData(controlInputData);
  listView.deleteEntry(controlDeleteEntry);
};

init();
