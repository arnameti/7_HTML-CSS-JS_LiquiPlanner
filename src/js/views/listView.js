import deleteIcon from 'url:../../assets/trash-solid.svg';

const ListView = class {
  _formEL = document.querySelector('[data-form]');

  getInputData(handler) {
    this._formEL.addEventListener('submit', function (e) {
      e.preventDefault();

      const inputTitleEl = document.querySelector('[data-input-title]');
      const inptAmountEl = document.querySelector('[data-input-amount]');
      const inputDateEl = document.querySelector('[data-input-date]');
      const radioBtnsEl = document.querySelectorAll('[data-radio-btn]');

      const inputValues = {
        title: inputTitleEl.value,
        amount: inptAmountEl.value,
        date: inputDateEl.value,
        radioBtns: radioBtnsEl,
      };

      handler(inputValues);
    });
  }

  render(inputValues) {
    const listContainer = document.querySelector('[data-list]');

    const markUp = this._generateMarkUp(inputValues);

    listContainer.innerHTML = '';
    listContainer.insertAdjacentHTML('afterbegin', markUp);
  }

  formatDate(inputDate) {
    const date = new Date(inputDate);
    // prettier-ignore
    const months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  checkAmountType(inputValues) {
    let value;
    inputValues.radioBtns.forEach(radioBtn => {
      if (radioBtn.checked) {
        value = radioBtn.value;
      }
    });
    return value;
  }

  _generateMarkUp(inputValues) {
    return `
    <article class="list__month">
    <div class="list__date_amount mt-20 mb-20">
      <h1 class="list__date heading-1">${this.formatDate(inputValues.date)}</h1>
      <span class="list__amount" data-type-amount="${this.checkAmountType(
        inputValues
      )}">80000 $</span>
    </div>
     <ul class="list__info-row">
      <li class="list__entry">
        <span class="list__entry__date">${inputValues.date}</span>
        <span class="list__entry__title">${inputValues.title}</span>
        <span class="list__entry__amount">${inputValues.amount} $</span>
          <button class="list__entry__delete">
            <img
              class="list__entry__delete-img"
              src="${deleteIcon}"
              alt=""
            />
            </button>
        </li>
      </ul>
    </article>
    `;
  }
};

export default new ListView();
