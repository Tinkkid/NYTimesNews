import jsScriptHeader from './js/jsScriptHeader';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';



import renderPopularNews from './js/renderPopularNews';
const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();


renderPopularNews()

import { onFvBtn }  from "./js/onFavoriteBtn"
const newsBoxEl = document.querySelector('.news-container') 
newsBoxEl.addEventListener('click', onFvBtn)



  