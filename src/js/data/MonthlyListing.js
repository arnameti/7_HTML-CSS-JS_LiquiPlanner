export default class MonthlyListing {
  constructor(year, month, allEntries) {
    this.year = year;
    this.month = month;
    this._allEntries = allEntries;
  }

  get entries() {
   return this._allEntries.sort((d1, d2) => new Date(d2.date) - new Date(d1.date))
  }
}



