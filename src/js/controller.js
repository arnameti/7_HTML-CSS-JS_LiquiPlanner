import listView from './views/listView';
import * as model from './model';

const controlLoadData = function() {
  model.fetchBookmarks();


  if (model.state.monthlyListings.length > 0) listView.render(model.state.monthlyListings);
};

const controlInputData = function(entry) {
  model.pushMovement(entry);

  console.log(model.state.monthlyListings);

  // model.fetchBookmarks();
  listView.render(model.state.monthlyListings);

};

const controlDeleteEntry = function(id) {
  model.deleteEntry(id);
  model.fetchBookmarks();
  listView.render(model.state.monthlyListings);
};

const init = function() {
  controlLoadData();
  listView.getInputData(controlInputData);
  listView.deleteEntry(controlDeleteEntry);
};

init();
