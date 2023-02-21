export { FAV_PAGES_KEY, OFFSETS_FAVORITES, MAX_WIDTH, NEWS_CARD_CSS_CLASSES };

const FAV_PAGES_KEY = 'favPagesData';

const OFFSETS_FAVORITES = {
    mobile: 5,
    tablet: 8,
    desktop: 9,
};
Object.freeze(OFFSETS_FAVORITES);

const MAX_WIDTH = {
    mobile: 320,
    tablet: 768,
};
Object.freeze(MAX_WIDTH);

const NEWS_CARD_CSS_CLASSES = {
    container: 'news-container',
    card: 'news-item',
    favLabel: 'add-news-favorite',
    inFavorites: 'in-favorites',
    //
    title: 'news-title',
};
Object.freeze(NEWS_CARD_CSS_CLASSES);