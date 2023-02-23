import { ref } from './refCaregories';
import createArrayNews from '../cards/createArrayNews';
import weatherTemplate from '../../template/weatherTemplate';
import createCards from '../cards/createCards';
import queueWeather from '../../js/countCard';
import { getWeatherWidget } from '../../js/weather';

export default async function onClikCategories(news, e) {
  // if pressed <svg> or <span>
  let btn = e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;

  btn = btn.nodeName !== 'BUTTON' ? btn.parentNode : btn; // if pressed <use>

  if (btn.nodeName !== 'BUTTON') return; // if pressed <li.categories__item-drop>

  if (ref.drop !== btn) {
    ref.dropList.classList.add('visually-hidden'); //close .categories__list-drop

    ref.dropList.classList.remove('isActiveCateg');

    const dataByCategory = await news.getCategory(btn.dataset.category);

    // const filterArr = createArrayNews(dataByCategory);

    const queueWeat = queueWeather();
    const strInj = dataByCategory
      .map((el, i) => (i === queueWeat ? weatherTemplate() : createCards(el)))
      .join('');

    // const strInj =  createCards(dataByCategory);
    document.querySelector('.news-container').innerHTML = strInj;
    getWeatherWidget();
  }

  document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');

  btn.parentNode.classList.add('isActiveCateg');
}
