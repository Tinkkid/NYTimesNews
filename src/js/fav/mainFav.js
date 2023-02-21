import { FAV_PAGES_KEY, NEWS_CARD_CSS_CLASSES } from "./constants";
import { createCardPop } from "../cardMarkup";
import { touchLocalStorageArr, resolveFavClick } from "./common";

const newsCardsContainer = document.querySelector(`.${NEWS_CARD_CSS_CLASSES.container}`);
newsCardsContainer.addEventListener('click', resolveFavClick);

const localStorageArr = touchLocalStorageArr(FAV_PAGES_KEY);

// const markup = localStorageArr.reduce((markup, article) => createCardPop(article) + markup, '');
// console.log(markup);
// updateMarkup(markup, newsCardsContainer);