import jsScriptHeader from './js/jsScriptHeader';
import './js/category-search';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';
import './js/fav/mainHome';



import renderPopularNews from './js/renderPopularNews';
const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();


renderPopularNews()

import { onFvBtn }  from "./js/onFavoriteBtn"
const newsBoxEl = document.querySelector('.news-container') 
newsBoxEl.addEventListener('click', onFvBtn)



  