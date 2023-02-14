import MovementList
  from './data/MovementList';
import Movement
  from './data/Movement';

export const state = {
  entries: []
};

export const pushEntry = function(movement) {
  if (JSON.stringify(movement) === '{}') return;

  const year = new Date(movement.date).getFullYear();
  const month = new Date(movement.date).getMonth();

  const movementListFound =
    state.entries.find(mov => mov.year === year && mov.month === month);

  const mov =
    new Movement(movement.title, movement.amount, movement.date);

  movementListFound
    ? movementListFound.movements.push(mov)
    : state.entries.push(new MovementList(year, month, new Array(mov)));

  localStorage.setItem('entries', JSON.stringify(state.entries));
};

export const fetchBookmarks = function() {
  if (localStorage.getItem('entries'))
    state.entries = JSON.parse(localStorage.getItem('entries'));
};

export const deleteEntry = function(id) {
  const entryIndex = state.entries.findIndex(entry => entry.id === id);
  state.entries.splice(entryIndex, 1);
  localStorage.setItem('entries', JSON.stringify(state.entries));
};

// export const sortAndOrganizeEntriesByDate = function(entriesArray) {
//   return entriesArray.sort((a, b) => {
//     return new Date(b.date) - new Date(a.date);
//   }).reduce((acc, entry) => {
//     const keyYear = new Date(entry.date).getFullYear();
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     const keyMonth = months[new Date(entry.date).getMonth()];
//     const key = `${keyMonth} ${keyYear}`;
//     const value = acc[key] || [];
//     return {
//       ...acc,
//       [key]: [...value, entry]
//     };
//   }, {});
// };


