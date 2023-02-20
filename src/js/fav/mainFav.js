export { getCardNode };

import { touchLocalStorageArr } from './common';


// temporary testing refs and event listeners
const refs = {
    container: document.querySelector('.container'),
    inp: document.querySelector('.info-container'),
    addBtn: document.querySelector('.add-to-storage'),
    rmBtn: document.querySelector('.delete-from-storage'),
};

const FAV_PAGES_KEY = 'favPagesData';



refs.addBtn.addEventListener('click', () => {
    const data = refs.inp.value.trim();
    if (data) {
        touchLocalStorageArr(FAV_PAGES_KEY, data, simpleArrPusher);
    }
});

refs.rmBtn.addEventListener('click', () => {
    const data = refs.inp.value.trim();
    if (data) {
        touchLocalStorageArr(FAV_PAGES_KEY, data, simpleArrRemover);
    }
});



function simpleArrPusher(array, data) {
    array.push(data);
}

function simpleArrRemover(array, data) {
    const idxToDelete = array.findIndex(el => el === data);
    if (idxToDelete > -1) {
        array.splice(idxToDelete, 1);
    }
}

// content for mainHome.js and 'fav/common.js', will be relocated later

const classNames = {
    cardsContainer: 'universe',
    card: 'mega-test-container',
    favLabel: 'info-container',
    inFavorites: 'in-favorites',
};

const cardsContainer = document.querySelector(`.${classNames.cardsContainer}`);

cardsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains(classNames.favLabel)) {
        return;
    }
    const cardNode = getCardNode(classNames.card, event.target);
    // TODO
    // checkStorage
    // addOrDeleteFromStorage
    cardNode.classList.toggle(classNames.inFavorites);
    // target.classList.add('in-favorites');
});

function getCardNode(cardClassName, favLabelNode) {
    let cardNode = favLabelNode;
    while (!cardNode.classList.contains(cardClassName)) {
        cardNode = cardNode.parentElement;
    }
    return cardNode;
}