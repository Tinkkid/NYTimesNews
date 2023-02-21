export { touchLocalStorageArr, getPagesOffset, getNewsCardNode, isCardInStorage };
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


function getNewsCardNode(newsCardClassName, favLabelNode) {
    let cardNode = favLabelNode;
    while (!cardNode.classList.contains(newsCardClassName)) {
        cardNode = cardNode.parentElement;
    }
    return cardNode;
}


function isCardInStorage(newsCardNode) {
    let localStorageContent = touchLocalStorageArr(FAV_PAGES_KEY);
    const idx = localStorageContent.findIndex(
        struct => struct.title === newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.title}`).textContent
    );
    return (idx > -1) ? true : false;
}