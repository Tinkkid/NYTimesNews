import jsScriptHeader from './js/jsScriptHeader';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';
import { getCategoryList } from './js/category-search';

const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();
getCategoryList();
