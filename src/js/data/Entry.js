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


// return monthlyListings
//   .map(monthlyListing => {
//     return `
//     <article class='list__month'>
//
//      <div class='list__date_amount mt-20 mb-20'>
//        <h1 class='list__date heading-1'>${this.formatDate(monthlyListing.month, monthlyListing.year)}</h1>
//        <span class='list__amount' data-type-amount=''>80000 $</span>
//      </div>
//
//       <ul class='list__info-row'>
//
//       ${monthlyListing.entries.map(e => {
//       return `
//        <li class='list__entry mb-10'>
//          <span class='list__entry__date'>${e.date}</span>
//          <span class='list__entry__title'>${e.title}</span>
//          <span class='list__entry__amount'>${e.amount} $</span>
//            <button class='list__entry__delete' data-entry-id='${e.id}' data-delete-btn>
//              <img
//                class='list__entry__delete-img'
//                src='${deleteIcon}'
//                alt=''
//              />
//              </button>
//          </li>`;
//     }).join('')}
//
//        </ul>
//      </article>`;
//   }).join('');