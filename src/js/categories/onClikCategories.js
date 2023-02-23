import { ref } from './refCaregories';
import createArrayNews from '../cards/createArrayNews';
import createCards from '../cards/createCards';

export default async function onClikCategories(news, e) {
  // if pressed <svg> or <span>
  let btn = e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;

  btn = btn.nodeName !== 'BUTTON' ? btn.parentNode : btn; // if pressed <use>

  if (btn.nodeName !== 'BUTTON') return; // if pressed <li.categories__item-drop>

  if (ref.drop !== btn) {
    ref.dropList.classList.add('visually-hidden'); //close .categories__list-drop

    ref.dropList.classList.remove('isActiveCateg');

    const dataByCategory = await news.getCategory(btn.dataset.category);

    const filterArr = createArrayNews(dataByCategory);

    console.log(filterArr);

    // const strInj = createCards(filterArr, ref.cardsList);
  }
  // else {
  //   document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');
  //   btn.parentNode.classList.toggle('isActiveCateg');
  //   return;
  // }
  document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');

  btn.parentNode.classList.add('isActiveCateg');
}
