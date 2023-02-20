export { touchLocalStorageArr, getPagesOffset, offsetsFavorites };


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


const offsetsFavorites = {
    mobile: 5,
    tablet: 8,
    desktop: 9,
};
const maxWidth = {
    mobile: 320,
    tablet: 768,
};
Object.freeze(offsetsFavorites);
Object.freeze(maxWidth);

function getPagesOffset(offsetsStruct) {
    if (window.matchMedia(`(max-width: ${maxWidth.mobile}px)`).matches) {
        return offsetsStruct.mobile;
    }
    else if (window.matchMedia(`(max-width: ${maxWidth.tablet}px)`).matches) {
        return offsetsStruct.tablet;
    }
    else {
        return offsetsStruct.desktop;
    }
}