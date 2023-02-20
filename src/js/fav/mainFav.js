import { touchLocalStorageArr } from './common';

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

// mainHome.js

const classNames = {
    cardsContainer: 'giga-test-container',
    card: 'super-test-container',
    favLabel: 'info-container',
};

const cardsContainer = document.querySelector(`.${classNames.cardsContainer}`);

cardsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains(classNames.favLabel)) {
        return;
    }
    const cardNode = getCardNode(event.target, classNames.card);
    // TODO
    // checkStorage
    // addOrDeleteFromStorage
    cardNode.classList.toggle('in-favorites');
    // target.classList.add('in-favorites');
});

function getCardNode(favLabelNode, cardClassName) {
    let cardNode = favLabelNode;
    while (!cardNode.classList.contains(cardClassName)) {
        cardNode = cardNode.parentElement;
    }
    return cardNode;
}