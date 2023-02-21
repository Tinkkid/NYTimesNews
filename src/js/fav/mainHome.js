import { NEWS_CARD_CSS_CLASSES } from "./constants";
import { getNewsCardNode } from "./common";

const newsCardsContainer = document.querySelector(`.${NEWS_CARD_CSS_CLASSES.container}`);

newsCardsContainer.addEventListener('click', (event) => {
    if (!( 
        event.target.classList.contains(NEWS_CARD_CSS_CLASSES.favLabel) ||
        event.target.parentNode.classList.contains(NEWS_CARD_CSS_CLASSES.favLabel)
        )) {
        return;
    }
    const newsCardNode = getNewsCardNode(NEWS_CARD_CSS_CLASSES.card, event.target);
    newsCardNode.classList.toggle(NEWS_CARD_CSS_CLASSES.inFavorites);
});