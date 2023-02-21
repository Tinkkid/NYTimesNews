export { getCardNode };
import { touchLocalStorageArr} from './common';
import { FAV_PAGES_KEY } from './constants';


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