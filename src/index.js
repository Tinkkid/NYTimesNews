import jsScriptHeader from './js/jsScriptHeader';
import './js/category-search';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';
import { onFavoriteBtnClick }  from "./js/onFavoriteBtn";
import renderPopularNews from './js/renderPopularNews';
const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();
renderPopularNews();
onFavoriteBtnClick()




  