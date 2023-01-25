import deleteIcon from 'url:../../assets/trash-solid.svg';

const ListView = class {
  _formEL = document.querySelector('[data-form]');
  _listContainer = document.querySelector('[data-list]');
  _inputTitleEl = document.querySelector('[data-input-title]');
  _inputAmountEl = document.querySelector('[data-input-amount]');
  _inputDateEl = document.querySelector('[data-input-date]');
  _radioBtnsEl = document.querySelectorAll('[data-radio-btn]');

  _errorMessages = [];

  deleteEntry(handler) {
    this._listContainer.addEventListener('click', function (e) {
      const clicked = e.target.closest('[data-entry-id]');

      if (!clicked) return;

      const id = clicked.dataset.entryId;

      handler(+id);
    });
  }

  getInputData(handler) {
    this._formEL.addEventListener('submit', e => {
      e.preventDefault();

      const inputValues = {
        title: this._inputTitleEl.value,
        amount: this._inputAmountEl.value,
        date: this._inputDateEl.value,
        radioBtns: this._radioBtnsEl,
        id: Date.now(),
      };

      this.checkInputFields(inputValues);

      if (this._errorMessages.length <= 0) {
        handler(inputValues);

        this._inputAmountEl.value = '';
        this._inputTitleEl.value = '';
        this._inputDateEl.value = '';
        this._inputTitleEl.focus();
      }

      this._errorMessages = [];
    });
  }

  checkInputFields(inputValues) {
    if (inputValues.title === '' || inputValues.title === null)
      this._errorMessages.push('Title is required');
    if (inputValues.amount === '' || inputValues.amount === null)
      this._errorMessages.push('Amount is required');
    if (inputValues.date === '' || inputValues.date === null)
      this._errorMessages.push('Date is required');

    this.renderErrorMessage(this._errorMessages);
  }

  renderErrorMessage(errorMessages) {
    const errorBox = document.querySelector('[data-error-box]');

    if (errorMessages.length <= 0) {
      errorBox.innerHTML = '';
      errorBox.insertAdjacentHTML('afterbegin', '');
      errorBox.dataset.errorBox = 'noErrors';
    } else {
      const markUp = errorMessages.map(msg => `<li> ${msg}</li>`).join('');
      errorBox.innerHTML = '';
      errorBox.insertAdjacentHTML('afterbegin', markUp);
      errorBox.dataset.errorBox = '';
    }
  }

  render(entries) {
    const markUp = this._generateMarkUp(entries);

    this._listContainer.innerHTML = '';
    this._listContainer.insertAdjacentHTML('afterbegin', markUp);
  }

  formatDate(inputDate) {
    const date = new Date(inputDate);
    // prettier-ignore
    const months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  checkAmountType(inputValues) {
    let value;
    const radioBtns = inputValues.radioBtns;
    radioBtns.forEach(radioBtn => {
      if (radioBtn.checked) {
        value = radioBtn.value;
      }
    });
    return value;
  }

  _generateMarkUp(entries) {
    return entries
      .map(inputValues => {
        return `
     <article class="list__month" data-entry-id="${inputValues.id}">
     <div class="list__date_amount mt-20 mb-20">
       <h1 class="list__date heading-1">${this.formatDate(
         inputValues.date
       )}</h1>
       <span class="list__amount" data-type-amount> 80000 $</span>
     </div>
      <ul class="list__info-row">
       <li class="list__entry">
         <span class="list__entry__date">${inputValues.date}</span>
         <span class="list__entry__title">${inputValues.title}</span>
         <span class="list__entry__amount">${inputValues.amount} $</span>
           <button class="list__entry__delete" data-delete-btn>
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
      })
      .join('');
  }
};

export default new ListView();
