import { cutText, cutTitle, formatDate } from './markupUtils';

export function createCard({
  section_name,
  web_url,
  headline,
  lead_paragraph,
  pub_date,
  multimedia,
  snippet,
}) {
  return `
        <li class="news-item">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done" width="18" height="18"><use
        href="/sprite.f14d31f7.svg#arrow-done"></use></svg>
          </span>
          <img src="https://www.nytimes.com/${
            multimedia[0].url
          }" loading="lazy" alt="${snippet}" class="news-img" />
          <p class="news-chip">${section_name}</p>
          <button type="button" class="add-news-favorite">
            <p class="favorite-btn-text">Add to favorite</p>
            <svg class="favorite-icon" width="16" height="16">
             <use href="/sprite.f14d31f7.svg#heart-empty" class="icon-empty-heart"></use>  
             <use href="/sprite.f14d31f7.svg#heart-fill" class="icon-heart"></use>  
                </svg> 
          </button>
        </div>
        <div class="news-info">
          <h2 class="news-title disable-scroll">
            ${cutTitle(headline.main)}
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
      </li> `;
}

export function createCardPop({
  media,
  title,
  section,
  subsection,
  abstract,
  published_date,
  url,
}) {
  return `
        <li class="news-item">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done" width="18" height="18"><use
        href="/sprite.f14d31f7.svg#arrow-done"></use></svg>
          </span>
          <img src="${
            !media[0]
              ? 'https://raw.githubusercontent.com/MaxF1996/NYTimesNews/main/src/images/The_New_York_Times.jpg'
              : media[0]['media-metadata'][2].url
          }" loading="lazy" alt="${
    !media[0] ? 'NYTimes' : media[0].caption
  }" class="news-img" />
          <p class="news-chip">${section || subsection}</p>
          <button type="button" class="add-news-favorite">
            <p class="favorite-btn-text">Add to favorite</p>
            <svg class="favorite-icon" width="16" height="16">
             <use href="/sprite.f14d31f7.svg#heart-empty" class="icon-empty-heart"></use>  
             <use href="/sprite.f14d31f7.svg#heart-fill" class="icon-heart"></use>  
                </svg> 
          </button>
        </div>
        <div class="news-info">
          <h2 class="news-title disable-scroll">
            ${cutTitle(title)}
          </h2>
          <p class="news-desk">
          ${cutText(abstract)}
          </p>
          <div class="adding">
            <p class="news-date">${formatDate(published_date)}</p>
            <a
              href=${url}
              class="news-link"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </li> `;
}
