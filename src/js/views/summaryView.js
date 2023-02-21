const SummaryView = class {
  _summary = document.querySelector('[data-summary]');


  render() {
    const markUp = this._generateMarkUp();

    this._summary.innerHTML = '';
    this._summary.insertAdjacentHTML('afterbegin', markUp);
  }
  _generateMarkUp() {
    return `
      <div class="summary__row mb-5">
        <span class="summary__incomes">incomes:</span>
        <span class="summary__incomes-amount">400.00 $</span>
      </div>
      <div class="summary__row">
        <span class="summary__expenses">expenses:</span>
        <span class="summary__expenses-amount">1100.00 $</span>
      </div>
      <div class="summary__row mt-20">
        <span class="summary__result">result:</span>
        <span class="summary__result-amount">-1100.00 $</span>
      </div>
    `
  }
}

export default new SummaryView();