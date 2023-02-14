export default class MovementList {
  constructor(year, month, movements = []) {
    this.year = year;
    this.month = month;
    this.movements = movements;
  }
}