export { FAV_PAGES_KEY, OFFSETS_FAVORITES, MAX_WIDTH, CARD_CLASSES };

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

const CARD_CLASSES = {
    container: 'universe',
    card: 'mega-test-container',
    favLabel: 'info-container',
    inFavorites: 'in-favorites',
};
Object.freeze(CARD_CLASSES);