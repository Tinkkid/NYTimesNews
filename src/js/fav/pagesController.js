import { touchLocalStorageArr, getPagesOffset } from './common';

export default class PagesController {
    #offset = 0;
    #pagesNum = 0;
    #page = 0;

    #localStorageKey = '';
    #offsetsStruct = {};

    constructor(localStorageKey, offsetsStruct) {
        this.#localStorageKey = localStorageKey;
        this.#offsetsStruct = offsetsStruct;
        this.refreshSettings();
    }

    refreshSettings() {
        this.#offset = getPagesOffset(this.#offsetsStruct);
        this.#pagesNum = this.#getPagesNum(this.#localStorageKey);
    }

    #getPagesNum(localStorageKey) {
        return Math.ceil(touchLocalStorageArr(localStorageKey).length / this.#offset);
    }
};