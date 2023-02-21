export { newsCardsChecker };
import { FAV_PAGES_KEY, NEWS_CARD_CSS_CLASSES } from "./constants";
import { isInStorage, markCardFavorite, resolveFavClick } from "./common";


const newsCardsContainer = document.querySelector(`.${NEWS_CARD_CSS_CLASSES.container}`);
newsCardsContainer.addEventListener('click', resolveFavClick);

function newsCardsChecker() {
    const cards = document.querySelectorAll(`.${NEWS_CARD_CSS_CLASSES.card}`);
    for (let card of cards) {
        if (isInStorage(FAV_PAGES_KEY, card) > -1) {
            markCardFavorite(card);
        } 
    }
}