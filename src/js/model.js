export const state = {
  entries: [],
};

export const pushEntry = function (inputValues) {
  if (JSON.stringify(inputValues) === '{}') return;

  state.entries.push(inputValues);
  localStorage.setItem('entries', JSON.stringify(state.entries));
};

export const fetchBookmarks = function () {
  if (localStorage.getItem('entries'))
    state.entries = JSON.parse(localStorage.getItem('entries'));
};

export const deleteEntry = function (id) {
  console.log(id);
  const entryIndex = state.entries.findIndex(entry => entry.id === id);
  state.entries.splice(entryIndex, 1);
  localStorage.setItem('entries', JSON.stringify(state.entries));
};
