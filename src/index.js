import jsScriptHeader from './js/jsScriptHeader';
import NewsApiServes from './rest-api';
import renderPopularNews from './js/renderPopularNews';
const news = new NewsApiServes();
jsScriptHeader();
renderPopularNews()

import { onFvBtn }  from "./js/onFavoriteBtn"
const newsBoxEl = document.querySelector('.news-container') 
newsBoxEl.addEventListener('click', onFvBtn)



  