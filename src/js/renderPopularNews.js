import { createCard } from "./cardMarkup"
import { updateMarkup } from "./makkupUtils";
import NewsApiServes from '../rest-api';
const newsBoxEl = document.querySelector('.news-container') 
const news = new NewsApiServes();

export default async function renderPopularNews(){
    console.log('happend')
// try{
    const response = await news.requestPopularNews()
    const articles = response.data.results;
        if (articles.length === 0) throw new Error("No data");
    const markup = articles.reduce((markup, article)=> createCard(article) + markup, '')
    updateMarkup(markup, newsBoxEl)

//   } catch{
//     onError()
//   } 
}

function onError(){
    newsBoxEl.textContent = 'Not found any articles'
}