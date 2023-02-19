export function createCard({section_name, web_url, headline, lead_paragraph, pub_date, multimedia, snippet}) {
        return `
        <li class="news-item">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done"><use class="icon-arrow-done"
        href="./images/sprite.svg#arrow-down"></use></svg>
          </span>
          <img src="https://www.nytimes.com/${multimedia[0].url}" loading="lazy" alt="${snippet}" class="news-img" />
          <p class="news-chip">${section_name}</p>
          <button type="button" class="add-news-favorite">
            <p class="favorite-btn-text">Add to favorite</p>
            <svg class="favorite-icon" width="16" height="16">
              <use href="./images/sprite.svg#heart-fill" class="icon-heart"></use>
              <use href="./images/sprite.svg#heart-empty class="icon-empty-heart"></use>
            </svg>
          </button>
        </div>
        <div class="news-info">
          <h2 class="news-title">
            ${headline.main}
          </h2>
          <p class="news-desk">
          ${cutText(lead_paragraph)}
          </p>
          <div class="adding">
            <p class="news-date">${formatDate(pub_date)}</p>
            <a
              href=${web_url}
              class="news-link"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </li>
          `;
} 

function formatDate(string){
  const pubDate = new Date(string);
const yyyy = pubDate.getFullYear();
let mm = pubDate.getMonth() + 1;
let dd = pubDate.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

return dd + '/' + mm + '/' + yyyy;
}

function cutText(string){
  const quantityChar = 120
  return string.length <= quantityChar? string :string.slice(0, quantityChar) + '...'
}

export function updateMarkup(markup, elem){
  elem.innerHTML= markup;
  }