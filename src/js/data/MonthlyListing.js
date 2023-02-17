export default class MonthlyListing {
  constructor(year, month, entries = []) {
    this.year = year;
    this.month = month;
    this.allEntries = entries;
  }

  get entries() {
   return this.allEntries.sort((d1, d2) => new Date(d2.date) - new Date(d1.date))
  }
}



