import jsScriptHeader from './js/jsScriptHeader';
import { getCategoryList } from './js/category-search';
import { getWeatherWidget } from './js/weather';
import popularNews from './js/renderPopularNews';
import { createCardPop } from './js/cardMarkup';
import { updateMarkup } from './js/markupUtils';
import { createCard } from './js/cardMarkup';
import jsCalendar from './js/calendar';

import NewsApiServes from './js/rest-api';
import footerJs from './js/footer';

const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

jsScriptHeader();
popularNews();

footerJs();

if (document.title !== 'NYTimes News: Read By Yourself') {
  getCategoryList();
}
console.log(news.getCardOrder());

export default function renderCards(articles, identifier) {
  news.sizeScreenCompute();
  const markup = articles
    .map((article, idx) => {
      if (identifier === 'search') {
        if (idx !== news.getCardOrder()) {
          return createCard(article);
        }
        return getWeatherWidget();
      } else if (identifier === 'populate') {
        if (idx !== news.getCardOrder()) {
          return createCardPop(article);
        }
        return getWeatherWidget();
      }
    })
    .join('');
  updateMarkup(markup, newsBoxEl);
}
