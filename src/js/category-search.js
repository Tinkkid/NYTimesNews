import axios from 'axios';

const API_KEY_NYT = '';


const categoriesDropdownList = document.querySelector('.categories-dropdown-list-js')
const othersDropdownList = document.querySelector('.others-dropdown-list-js')

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

    const markupCategories = response.data.results.map(arr => `<li class="dropdown__item">
                            <button class="dropdown__category-btn">${arr.display_name}</button>
                        </li>`).join('');
    categoriesDropdownList.innerHTML = markupCategories;
}
getCategoryList();

