import { cutText, cutTitle, formatDate } from "./makkupUtils";

export function createCard({section_name, web_url, headline, lead_paragraph, pub_date, multimedia, snippet, subsection, published_date, title, url, media, des_facet, abstract })
 {      return `
        <li class="news-item">
        <div class="overlay"></div>
        <div class="img-thumb">
        <span class="readable"
        >Already read
        <svg class="icon-done"><use class="icon-arrow-done"
        href="./images/sprite.svg#arrow-down"></use></svg>
          </span>
          <img src="https://www.nytimes.com/${multimedia[0].url || media.media-metadata[0].url}" loading="lazy" alt="${snippet || des_facet}" class="news-img" />
          <p class="news-chip">${section_name || subsection}</p>
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
            ${cutTitle(headline.main) || cutTitle(title)}
          </h2>
          <p class="news-desk">
          ${cutText(lead_paragraph) || cutText(abstract)}
          </p>
          <div class="adding">
            <p class="news-date">${formatDate(pub_date) || formatDate(published_date)}</p>
            <a
              href=${web_url || url}
              class="news-link"
              target="_blank"
              rel="noopener noreferrer"
              >Read more</a
            >
          </div>
        </div>
      </li> `
} 

