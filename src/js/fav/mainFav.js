export { getCardNode };
import { touchLocalStorageArr} from './common';
import { FAV_PAGES_KEY, CARD_CLASSES } from './constants';


// temporary testing refs and event listeners
const refs = {
    container: document.querySelector('.container'),
    inp: document.querySelector('.info-container'),
    addBtn: document.querySelector('.add-to-storage'),
    rmBtn: document.querySelector('.delete-from-storage'),
};



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

const cardsContainer = document.querySelector(`.${CARD_CLASSES.container}`);

cardsContainer.addEventListener('click', (event) => {
    event.preventDefault();
    if (!event.target.classList.contains(CARD_CLASSES.favLabel)) {
        return;
    }
    const cardNode = getCardNode(CARD_CLASSES.card, event.target);
    // TODO
    // checkStorage
    // addOrDeleteFromStorage
    cardNode.classList.toggle(CARD_CLASSES.inFavorites);
    // target.classList.add('in-favorites');
});

function getCardNode(cardClassName, favLabelNode) {
    let cardNode = favLabelNode;
    while (!cardNode.classList.contains(cardClassName)) {
        cardNode = cardNode.parentElement;
    }
    return cardNode;
}