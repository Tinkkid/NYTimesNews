import { createCardPop } from './cardMarkup';
import { updateMarkup } from './markupUtils';
import NewsApiServes from './rest-api';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import { addEvtListOnReadMore } from './onReadLink';
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

  console.log(articles);

  const markup = articles.reduce((markup, article) =>  markup + createCardPop(article), '');
  updateMarkup(markup, newsBoxEl);
	addEvtListOnReadMore(articles);
    } catch{
      onError()
    }
}

export function onError() {
  Notiflix.Notify.failure("Sorry, we didn't find any articles!")
}

