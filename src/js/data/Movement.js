export default class Movement {
  constructor(title, amount, date) {
    this.title = title;
    this.amount = amount;
    this.date = date;
    this.id = Date.now();
  }
}