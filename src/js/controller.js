import listView from './views/listView';
import * as model from './model';
import summaryView
  from './views/summaryView';

const controlLoadData = function() {
  model.fetchBookmarks();

  if (model.state.monthlyListings.length > 0)
    listView.render(model.state.monthlyListings);

  summaryView.render();
};

const controlInputData = function(entry) {
  model.pushMovement(entry);

  listView.render(model.state.monthlyListings);
  summaryView.render();

  console.log(model.state.monthlyListings);
};

const controlDeleteEntry = function(entryId, monthlyListingId) {
  model.deleteEntry(entryId, monthlyListingId);
  model.fetchBookmarks();
  listView.render(model.state.monthlyListings);
};

const init = function() {
  controlLoadData();
  listView.getInputData(controlInputData);
  listView.deleteEntry(controlDeleteEntry);
};

init();
