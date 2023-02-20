import { createCard } from './cardMarkup';
import { updateMarkup } from './makkupUtils';
import NewsApiServes from './rest-api';
import { onError } from './renderPopularNews';

const news = new NewsApiServes();
const newsBoxEl = document.querySelector('.news-container');

export default async function onSearchSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  news.query = e.target.elements.word.value;
  news.setDate = '20200218'; /////// з календаря?
  try {
    const response = await news.searchNewsByInputAndDate();
    const articles = response.data.response.docs;
    if (articles.length === 0) throw new Error('No data');
    renderCardsOnPage();
  } catch {
    onError();
  }
}

function renderCardsOnPage() {
  const markup = articles.reduce(
    (markup, article) => createCard(article) + markup,
    ''
  );
  updateMarkup(markup, newsBoxEl);
}
