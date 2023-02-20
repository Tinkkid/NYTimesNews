import jsScriptHeader from './js/jsScriptHeader';
import './js/category-search';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';



const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();

