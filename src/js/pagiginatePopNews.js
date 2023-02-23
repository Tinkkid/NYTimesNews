import NewsApiServes from "./rest-api"
import { createCardPop } from './cardMarkup';
import { createCard } from './cardMarkup';
import { updateMarkup } from './markupUtils';
import { getWeatherWidget } from './weather'
const news = new NewsApiServes();


export async function pagiantePopularNews() {
    const response = await news.requestPopularNews();
    const articles = response.data.results;
    let curentPage = 1;
    let numResults = articles.length;
    let newsPerPage = 4;
    let n = 0;


    if (window.innerWidth > 768 && window.innerWidth < 1280) {
        newsPerPage = 7;
        n = 1;
      }

    if (window.innerWidth > 1280) {
        newsPerPage = 8;
        n = 2;
    }
    
    function randerNews(articles, newsPerPage, curentPage) {
        const newsContainerEl = document.querySelector('.news-container');

        const start = newsPerPage * (curentPage - 1);
        const end = newsPerPage * curentPage;

        const paginatedNews = articles.slice(start, end)
        
        const arrNews = paginatedNews.map(news => {
            return createCardPop(news);
        })
        arrNews.splice(n,0,getWeatherWidget())
        const markup = arrNews.join('')

        updateMarkup(markup, newsContainerEl)

    }

    const countPage = Math.ceil(numResults / newsPerPage)

    function displayPaginator(countPage) {
        const paginationEL = document.querySelector('.pagination');
        const ulEl = document.createElement("ul"); 
        ulEl.classList.add('pagination__list');

        for (let i = 0; i < countPage; i++) {
            const liEL = displayPaginationBtn(i+1)
            ulEl.appendChild(liEL)
        }

        paginationEL.appendChild(ulEl)

    }
    
    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('pagination__item');
        liEl.innerText = page;

        if (curentPage == page) {
            liEl.classList.add('pagination__item--active')}

        liEl.addEventListener("click", () => {
            curentPage = page;
            randerNews(articles, newsPerPage, curentPage)

            let currentActiveLi = document.querySelector('.pagination__item--active');
            currentActiveLi.classList.remove('pagination__item--active');
            liEl.classList.add('pagination__item--active');
        })
        return liEl;
    }
    randerNews(articles, newsPerPage, curentPage);
    displayPaginator(countPage);

}

 pagiantePopularNews()
