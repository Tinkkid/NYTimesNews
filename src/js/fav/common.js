export { touchLocalStorageArr, getPagesOffset, getNewsCardNode, checkAndChangeStorage };
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


function checkAndChangeStorage(newsCardNode) {
    let localStorageArr = touchLocalStorageArr(FAV_PAGES_KEY);
    const title = newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.title}`).textContent;

    const idx = localStorageArr.findIndex(
        struct => struct.title === title
    );
    if (idx > -1) {
        localStorageArr.splice(idx, 1);
        localStorage.setItem(FAV_PAGES_KEY, JSON.stringify(localStorageArr));

        // Delete color
    } else {
        localStorageArr.push(collectData(newsCardNode));
        localStorage.setItem(FAV_PAGES_KEY, JSON.stringify(localStorageArr));

        // Add color
    }
}


function collectData(newsCardNode) {
    const dataStruct = {
        title: newsCardNode.querySelector(`.${NEWS_CARD_CSS_CLASSES.title}`).textContent,
    };
    return dataStruct;
}