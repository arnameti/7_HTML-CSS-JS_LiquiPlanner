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
