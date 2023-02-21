import { NEWS_CARD_CSS_CLASSES } from "./constants";
import { getNewsCardNode, checkAndChangeStorage } from "./common";

const newsCardsContainer = document.querySelector(`.${NEWS_CARD_CSS_CLASSES.container}`);

newsCardsContainer.addEventListener('click', (event) => {
    if (!( 
        event.target.classList.contains(NEWS_CARD_CSS_CLASSES.favButton) ||
        event.target.parentNode.classList.contains(NEWS_CARD_CSS_CLASSES.favButton)
        )) {
        return;
    }
    const newsCardNode = getNewsCardNode(NEWS_CARD_CSS_CLASSES.card, event.target);
    checkAndChangeStorage(newsCardNode);
});