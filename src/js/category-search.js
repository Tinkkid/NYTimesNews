import axios from 'axios';

const API_KEY_NYT = '85VwA43v2JxogoVfbQi2IxsUQyUy8fL7';

async function getCategoryList() {
    const response = await axios(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY_NYT}`);
    
     const markupOthers = response.data.results.map((arr, index) => {
         if (index > 5) {
           return `<li class="dropdown__item">
            <button class="dropdown__category-btn">${arr.display_name}</button>
          </li>`
        }
    }).join('')
    othersDropdownList.innerHTML = markupOthers;

  
}

