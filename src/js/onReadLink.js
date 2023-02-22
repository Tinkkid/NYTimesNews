import { formatDate } from './markupUtils';
import { save, load, remove } from './localStorageService';
import { createCard, createCardPop } from './cardMarkup';

const readList = document.querySelector('.read');
const STORAGE_KEY = 'read';
let readMoreLinks;

// Фунція додає слухача на лінк 'Read more' на головній сторінці
function addEvtListOnReadMore(articles) {
  readMoreLinks = document.querySelectorAll('.news-link');

  for (let i = 0; i < readMoreLinks.length; i++) {
    let article = articles[i];

    let link = readMoreLinks[i];

    //функція додає прочитане на Local Storage
    function addReadToStorage() {
      const storageItems = load(STORAGE_KEY);

      if (storageItems === undefined) {
        save(STORAGE_KEY, [article]);
      } else {
        const itemIndex = storageItems.findIndex(
          item => item.abstract === article.abstract
        );
        console.log('itemIndex', itemIndex);

        if (itemIndex >= 0) {
          storageItems.splice(itemIndex, 1);
        }

        storageItems.push(article);
        save(STORAGE_KEY, storageItems);
      }
    }

    link.addEventListener('click', addReadToStorage);
  }
}

// Слухач, на відкриття сторінки
window.addEventListener('DOMContentLoaded', addAllReadOnPage);

function getDate(item) {
  if (item.published_date) return item.published_date;

  const regexp = /(\d+-\d+-\d+)/g;
  const m = regexp.exec(item.pub_date);
  if (m) return m[1];
  return item.pub_date;
}

//функція, яка додає статті зі сховища на сторінку
function addAllReadOnPage() {
  console.log('add All Read On Page');

  const storageItems = load(STORAGE_KEY);
  //console.log('items', storageItems);

  if (storageItems !== undefined) {
    //сортуємо масив, отриманий з Local Storage по даті

    const sortedStorageArr = storageItems.sort((a, b) =>
      getDate(b).localeCompare(getDate(a))
    );

    console.log('sorted', sortedStorageArr);

    let currentDate = null;
    let markup = '';

    sortedStorageArr.forEach(item => {
      let date = getDate(item);

      if (currentDate !== date) {
        if (currentDate !== null) {
          markup += '</div>'; //close current title
        }
        currentDate = date;
        markup += createTitleMarcup(date);
      }

      if (Object.keys(item).includes('pub_date')) {
        markup += createCard(item);
      } else {
        markup += createCardPop(item);
      }
    });

    markup += '</div>'; //close the title
    readList.insertAdjacentHTML('beforeend', markup);
  }

  addEvtLisOnArrowBtn();
}

//функція, яка створює розмітку заголовка
function createTitleMarcup(date) {
  return `
		 <li class="read__block">
			 <div class="read__title">
				 <div class="read__date">
					 <span class="date">${formatDate(date)}</span>
				 </div>
			 	 <button type="button" class="show-btn show-btn__up" id='${date}'></button>
			 </div>
		 </li>
		 <div class="read__gallery" id='read__gallery-${date}'>`;
}

//функція відкриття/закриття випадаючого списку зі статтями
function addEvtLisOnArrowBtn() {
  const showButtons = document.querySelectorAll('.show-btn');

  showButtons.forEach(button => {
    const newsGallery = document.getElementById('read__gallery-' + button.id);

    button.addEventListener('click', event => {
      newsGallery.classList.toggle('hidden');

      button.classList.toggle('show-btn__up');
      button.classList.toggle('show-btn__down');
    });
  });
}

export { addEvtListOnReadMore };
