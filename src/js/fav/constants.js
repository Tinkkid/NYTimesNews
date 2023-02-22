export { FAV_PAGES_KEY, OFFSETS_FAVORITES, MAX_WIDTH, NEWS_CARD_CSS_CLASSES, WEATHER_CARD_CSS_CLASS };


const FAV_PAGES_KEY = 'favPagesData';
const WEATHER_CARD_CSS_CLASS = 'weather__card';


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
    favButton: 'add-news-favorite',
    icon: 'favorite-icon',
    
    inFavorites: 'in-favorites',

    title: 'news-title',
    abstract: 'news-desk',
    section: 'news-chip',
    media: 'news-img',
    published_date: 'news-date',
    url: 'news-link',
};
Object.freeze(NEWS_CARD_CSS_CLASSES);