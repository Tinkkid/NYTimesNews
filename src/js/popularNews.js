import renderCards from '../index';
import NewsApiServes from './rest-api';
const newsBoxEl = document.querySelector('.news-container');
const news = new NewsApiServes();

export default async function () {
  if (
    document.title === 'NYTimes News: Your Favorites' ||
    document.title === 'NYTimes News: Read By Yourself'
  ) {
    return;
  }

  try {
    const response = await news.requestPopularNews();
    const articles = response.data.results;
    if (articles.length === 0) throw new Error('No data');
    renderCards(articles, 'populate');
  } catch {
    onError();
  }
}

export function onError() {
  newsBoxEl.textContent = 'Not found any articles';
}
