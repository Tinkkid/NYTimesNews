import { createCardPop } from './cardMarkup';
import { updateMarkup } from './markupUtils';
import NewsApiServes from './rest-api';
import Notiflix from 'notiflix';
import { newsCardsChecker } from './fav/mainHome';
import 'notiflix/dist/notiflix-3.2.6.min.css';
const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

export default async function renderPopularNews() {
  if (document.title !== 'NYTimes News') {
    return;
  }
  console.log('happend');
  try{
  const response = await news.requestPopularNews();
  const articles = response.data.results;
  if (articles.length === 0) throw new Error('No data');

  const markup = articles.reduce((markup, article) => createCardPop(article) + markup, '');
  updateMarkup(markup, newsBoxEl);

    } catch{
      onError()
    }

  newsCardsChecker();
}

export function onError() {
  Notiflix.Notify.failure("Sorry, we didn't find any articles!")
}

