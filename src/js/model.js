import MonthlyListing
  from './data/MonthlyListing';
import Entry
  from './data/Entry';


export const state = {
  monthlyListings: []
};

const sortMovementByYearAndMonth = function(monthlyListings) {
  return monthlyListings
    .sort((d1, d2) => d2.year - d1.year)
    .sort((d1, d2) => d2.month - d1.month);
};

const sortMovementByDay = function(monthlyListings) {
  monthlyListings.forEach(monthlyListing => {
    monthlyListing.entries.sort((d1, d2) => new Date(d2.date) - new Date(d1.date));
  });
};

export const pushMovement = function(entry) {
  if (JSON.stringify(entry) === '{}') return;

  const year = entry.year;
  const month = entry.month;

  const monthlyListingFound =
    state.monthlyListings.find(monthlyList => monthlyList.year === year && monthlyList.month === month);

  const e =
    new Entry(entry.title, entry.amount, entry.date);

  monthlyListingFound
    ? monthlyListingFound.entries.push(e)
    : state.monthlyListings.push(new MonthlyListing(year, month, new Array(e)));

  sortMovementByYearAndMonth(state.monthlyListings);
  sortMovementByDay(state.monthlyListings);

  localStorage.setItem('monthlyListings', JSON.stringify(state.monthlyListings));
};

export const fetchBookmarks = function() {
  if (localStorage.getItem('monthlyListings')) {
    state.monthlyListings = JSON.parse(localStorage.getItem('monthlyListings'));
  }
};

export const deleteEntry = function(entryId, monthlyListingId) {

  const monthlyListingIndex =
    state.monthlyListings.findIndex(monthlyListing => monthlyListing.id === monthlyListingId);

  const entries = state.monthlyListings[monthlyListingIndex].entries;

  if (entries.length > 1) {
    const entryIndex = entries.findIndex(entry => entry.id === entryId);
    entries.splice(entryIndex, 1);
  } else {
    state.monthlyListings.splice(monthlyListingIndex, 1);
  }

  localStorage.setItem('monthlyListings', JSON.stringify(state.monthlyListings));
};
