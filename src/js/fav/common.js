export { touchLocalStorageArr, getPagesOffset, getNewsCardNode, isInStorage, removeCardFromFavorites, addCardToFavorites, markCardFavorite, resolveFavClick };
import { FAV_PAGES_KEY, MAX_WIDTH, NEWS_CARD_CSS_CLASSES } from "./constants";


function getPagesOffset(offsetsStruct) {
    if (window.matchMedia(`(max-width: ${MAX_WIDTH.mobile}px)`).matches) {
        return offsetsStruct.mobile;
    }
    else if (window.matchMedia(`(max-width: ${MAX_WIDTH.tablet}px)`).matches) {
        return offsetsStruct.tablet;
    }
    else {
        return offsetsStruct.desktop;
    }
}


function touchLocalStorageArr(key, incomingData = null, operatingFunc = null) {
    let dataArr = [];
    const storedData = localStorage.getItem(key);
    if (storedData) {
        try {
            dataArr = JSON.parse(storedData);
        } catch (error) {
            console.log(error.message);
        }
    }
    if (operatingFunc) {
        operatingFunc(dataArr, incomingData);
        localStorage.setItem(key, JSON.stringify(dataArr));
    }
    return dataArr;
}


function getNewsCardNode(newsCardClassName, favButtonNode) {
    let newsCardNode = favButtonNode;
    while (!newsCardNode.classList.contains(newsCardClassName)) {
        newsCardNode = newsCardNode.parentElement;
    }
    return newsCardNode;
}


function isInStorage(localStorageKey, newsCardNode) {
    const title = newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.title}`).textContent;
    const idx = touchLocalStorageArr(localStorageKey).findIndex(
        struct => struct.title === title
    );
    return idx;
}


function removeCardFromFavorites(localStorageKey, idx, newsCardNode) {
    touchLocalStorageArr(localStorageKey, idx, removeFromArr);
    newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.favButton}`).textContent = 'Add to favorites';
}
function removeFromArr(storageArr, idx) {
    storageArr.splice(idx, 1);
}


function addCardToFavorites(localStorageKey, newsCardNode) {
    touchLocalStorageArr(localStorageKey, newsCardNode, addToArr);
    newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.favButton}`).textContent = 'In favorites';
}
function addToArr(storageArr, newsCardNode) {
    storageArr.unshift(collectData(newsCardNode));
}


function markCardFavorite(newsCardNode) {
    newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.favButton}`).textContent = 'In favorites';
};


function collectData(newsCardNode) {
    const dataStruct = {
        media: [{
            url: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.media}`).src,
            caption: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.media}`).alt,
        }],
        title: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.title}`).textContent,
        section: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.section}`).textContent,
        subsection: '',
        abstract: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.abstract}`).textContent,
        published_date: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.published_date}`).textContent,
        url: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.url}`).href,
    };
    return dataStruct;
}


function resolveFavClick(event) {
    if (!( 
        event.target.classList.contains(NEWS_CARD_CSS_CLASSES.favButton) ||
        event.target.parentNode.classList.contains(NEWS_CARD_CSS_CLASSES.favButton) ||
        event.target.tagName === 'use'
        )) {
        return;
    }

    const newsCardNode = getNewsCardNode(NEWS_CARD_CSS_CLASSES.card, event.target);

    const idx = isInStorage(FAV_PAGES_KEY, newsCardNode);
    idx > -1 ?
    removeCardFromFavorites(FAV_PAGES_KEY, idx, newsCardNode) :
    addCardToFavorites(FAV_PAGES_KEY, newsCardNode);
}