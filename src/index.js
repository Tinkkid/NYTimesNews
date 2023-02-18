import NewsApiServes from './rest-api';

const news = new NewsApiServes();
console.log(news.requestListCategories());
