import { formatDate } from './markupUtils';
import { save, load, remove } from './localStorageService';

const readList = document.querySelector('.read');
const STORAGE_KEY = 'read';

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
        const itemIndex = storageItems.findIndex(item => +item.title === +article.title);
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

//функція, яка додає статті зі сховища на сторінку
function addAllReadOnPage() {
  const storageItems = load(STORAGE_KEY);
  //   console.log(storageItems);
  if (storageItems !== undefined) {
    //сортуємо масив, отриманий з Local Storage по даті
    const sortedStorageArr = storageItems.sort();
    //  console.log(sortedStorageArr);

    let currentDate = null;
    let markup = '';

    sortedStorageArr.forEach(item => {
      if (currentDate !== item.pub_date || item.published_date) {
        if (currentDate !== null) {
          markup += '</div>'; //close current title
        }
        currentDate = item.pub_date || item.published_date;
        markup += createTitleMarcup(item);
      }

      markup += createCard(item);
    });

    markup += '</div>'; //close the title
    readList.insertAdjacentHTML('beforeend', markup);
  }

  addEvtLisOnArrowBtn();
}

//функція, яка створює розмітку заголовка
function createTitleMarcup({ pub_date, published_date }) {
  return `
		 <li class="read__block">
			 <div class="read__title">
				 <div class="read__date">
					 <span>${formatDate(pub_date) || formatDate(published_date)}</span>
				 </div>
			 <button type="button" class="show-btn show-btn__down" id='${pub_date || published_date}'>
		  </button>
			 </div>
		 </li>
		 <div class="read__gallery" if='news-gallery-${pub_date || published_date}'>`;
}

//функція відкриття/звкриття випадаючого списку зі статтями
function addEvtLisOnArrowBtn() {
  const showButtons = document.querySelectorAll('.show-btn');
  //   console.log(showButtons);

  showButtons.forEach(button => {
    const newsGallery = document.getElementById('news-gallery-' + button.id);
    // const arrowTop = document.getElementById('arrow-top');
    // const arrowDown = document.getElementById('arrow-down');

    button.addEventListener('click', event => {
      // console.log(arrowDown);
      newsGallery.classList.toggle('visible');

      button.classList.toggle('show-btn__up');
      button.classList.toggle('show-btn__down');
    });
  });
}
