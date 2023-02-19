import jsScriptHeader from './js/jsScriptHeader';
import NewsApiServes from './rest-api';
import { getWeatherWidget } from './js/weather';  
// для використання віджета погоди потрібно викликати функцію, коли буде рендер карток на головній сторінці. Функція закоментована нижче
getWeatherWidget();

const news = new NewsApiServes();
jsScriptHeader();
