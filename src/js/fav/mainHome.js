import { NEWS_CARD_CSS_CLASSES } from "./constants";
import { resolveFavClick } from "./common";

// import { FAV_PAGES_KEY } from "./constants";
// import { getNewsCardNode, removeCardFromFavorites, addCardToFavorites, isInStorage } from "./common";

const newsCardsContainer = document.querySelector(`.${NEWS_CARD_CSS_CLASSES.container}`);
newsCardsContainer.addEventListener('click', resolveFavClick);

