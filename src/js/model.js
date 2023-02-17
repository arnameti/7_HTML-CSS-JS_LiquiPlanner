import MonthlyListing
  from './data/MonthlyListing';
import Entry
  from './data/Entry';
import {stringifyWithFunctions, parseWithFunctions} from './data/helpers';

export const state = {
  monthlyListings: []
};

const sortMovementByYearAndMonth = function() {
  return state.monthlyListings
    .sort((d1, d2) => d2.year - d1.year)
    .sort((d1, d2) => d2.month - d1.month);
};

export const pushMovement = function(entry) {
  if (JSON.stringify(entry) === '{}') return;

  const year = entry.year;
  const month = entry.month;

  const monthlyListingFound =
    state.monthlyListings.find(monthlyList => monthlyList.year === year && monthlyList.month === month);

  const mov =
    new Entry(entry.title, entry.amount, entry.date);

  monthlyListingFound
    ? monthlyListingFound.entries.push(mov)
    : state.monthlyListings.push(new MonthlyListing(year, month, new Array(mov)));

  sortMovementByYearAndMonth();

  localStorage.setItem('monthlyListings', stringifyWithFunctions(state.monthlyListings));
};

export const fetchBookmarks = function() {
  if (localStorage.getItem('monthlyListings'))
    state.monthlyListings = parseWithFunctions(localStorage.getItem('monthlyListings'));
};

export const deleteEntry = function(id) {
  const entryIndex = state.monthlyListings.findIndex(monthlyList => monthlyList.id === id);
  state.monthlyListings.splice(entryIndex, 1);
  localStorage.setItem('monthlyListings', JSON.stringify(state.monthlyListings));
};



