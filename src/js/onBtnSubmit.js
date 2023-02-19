import {createCard, updateMarkup} from "./cardMarkup"
import { fetchNews } from "./fetchCards";
const newsBoxEl = document.querySelector('.news-container') 

export async function onBtnSubmit(e){
    e.preventDefault()   
    try{
    const articles = await fetchNews()
        if (articles.length === 0) throw new Error("No data");
    const markup = articles.reduce((markup, article)=> createCard(article) + markup, '')
    updateMarkup(markup, newsBoxEl)
} catch{
    onError()
 }
}

    function onError(){
        newsBoxEl.textContent = 'Not found any articles'
    }