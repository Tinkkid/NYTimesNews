import { ref } from './refCaregories';
import createArrayNews from '../cards/createArrayNews';
import weatherTemplate from '../../template/weatherTemplate';
import createCards from '../cards/createCards';
import queueWeather from '../../js/countCard';
import { getWeatherWidget } from '../../js/weather';
import { createCardCategory } from '../cardMarkup';
import { updateMarkup } from '../markupUtils';

export default async function onClikCategories(news, e) {
  // if pressed <svg> or <span>
  let btn = e.target.nodeName !== 'BUTTON' ? e.target.parentNode : e.target;

  btn = btn.nodeName !== 'BUTTON' ? btn.parentNode : btn; // if pressed <use>

  if (btn.nodeName !== 'BUTTON') return; // if pressed <li.categories__item-drop>

  if (ref.drop !== btn) {
    ref.dropList.classList.add('visually-hidden'); //close .categories__list-drop

    ref.dropList.classList.remove('isActiveCateg');

    const dataByCategory = await news.getCategory(btn.dataset.category);
    pagianteCtegoryNews()

    console.log('asdas', dataByCategory)




     async function pagianteCtegoryNews() {
   const response = await news.getCategory(btn.dataset.category);
   
    const articles = dataByCategory;
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
    
    async function randerNews(articles, newsPerPage, curentPage) {
      const newsContainerEl = document.querySelector('.news-container');
      const start = newsPerPage * (curentPage - 1);
      const end = newsPerPage * curentPage;
      const paginatedNews = articles.slice(start, end)
      
        const arrNews = paginatedNews.map(news => {
            return createCardCategory(news);
        })
        arrNews.splice(n, 0, weatherTemplate())
      const markup = arrNews.join('')
      
        getWeatherWidget();
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
















    // const filterArr = createArrayNews(dataByCategory);

    const queueWeat = queueWeather();
    const strInj = dataByCategory
      .map((el, i) => (i === queueWeat ? weatherTemplate() : createCards(el)))
      .join('');

    // const strInj =  createCards(dataByCategory);
    // document.querySelector('.news-container').innerHTML = strInj;
    getWeatherWidget();
  }

  document.querySelector('.isActiveCateg')?.classList.remove('isActiveCateg');

  btn.parentNode.classList.add('isActiveCateg');
}



