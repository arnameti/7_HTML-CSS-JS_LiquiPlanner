export default class Entry {
  constructor(title, amount, date) {
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.id = Date.now();
  }

  get year() {
    return new Date(this.date).getFullYear();
  }

  get month() {
    return new Date(this.date).getMonth();
  }
}