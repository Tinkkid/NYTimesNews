export { touchLocalStorageArr, getPagesOffset};
import { MAX_WIDTH } from "./constants";


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