import { createCard } from "./js/card-set/cardMarkup";
import { fetchNews } from "./js/card-set/renderCards";
const newsBoxEl = document.querySelector('.news-container') 
const btn = document.querySelector('.btn')

btn.addEventListener('click', onFormSubmit)

async function onFormSubmit(e){
    e.preventDefault()   
    try{
    const articles = await fetchNews()
        if (articles.length === 0) throw new Error("No data");
    const markup = articles.reduce((markup, article)=> createCard(article) + markup, '')
    updateMarkup(markup)
} catch{
    onError()
 }

}
function updateMarkup(markup){
    newsBoxEl.innerHTML= markup;
    }

    function onError(){
        newsBoxEl.textContent = 'Not found any articles'
    }