export default class MonthlyListing {
  constructor(year, month, entries = []) {
    this.year = year;
    this.month = month;
    this.allEntries = entries;
  }

  get entries() {
   return this.allEntries.sort((a, b) => new Date(b.date) - new Date(a.date))
  }
}



