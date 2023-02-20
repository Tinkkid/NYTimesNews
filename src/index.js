import jsScriptHeader from './js/jsScriptHeader';
import NewsApiServes from './js/rest-api';
import { getWeatherWidget } from './js/weather';
import { getCategoryList } from './js/category-search';
import renderPopularNews from './js/renderPopularNews';

const news = new NewsApiServes();
jsScriptHeader();
getWeatherWidget();
renderPopularNews();
// getCategoryList();

if (curentPage === 2) {
  paginationPerviosBtn.disabled = false;
  paginationFirstBtn.classList.remove('hidden');
  paginationPervDots.classList.add('hidden');
  paginationIncrementBtn.classList.remove('hidden');
  paginationDoubleIncrementBnt.classList.remove('hidden');
  paginationPostDots.classList.remove('hidden');
  paginationLastBtn.classList.remove('hidden');
  paginationNextBtn.disabled = false;
}

if (curentPage > 2 && curentPage < Math.ceil(numResults / newsPerPage) - 3) {
  paginationPerviosBtn.disabled = false;
  paginationFirstBtn.classList.remove('hidden');
  paginationPervDots.classList.remove('hidden');
  paginationIncrementBtn.classList.remove('hidden');
  paginationDoubleIncrementBnt.classList.remove('hidden');
  paginationPostDots.classList.remove('hidden');
  paginationLastBtn.classList.remove('hidden');
  paginationNextBtn.disabled = false;
}

if (curentPage === Math.ceil(numResults / newsPerPage)) {
  paginationPerviosBtn.disabled = false;
  paginationFirstBtn.classList.remove('hidden');
  paginationPervDots.classList.remove('hidden');
  paginationIncrementBtn.classList.add('hidden');
  paginationDoubleIncrementBnt.classList.add('hidden');
  paginationPostDots.classList.add('hidden');
  paginationLastBtn.classList.add('hidden');
  paginationNextBtn.disabled = true;
}

if (Math.ceil(numResults / newsPerPage) === 3) {
  paginationPostDots.classList.add('hidden');
  paginationDoubleIncrementBnt.classList.add('hidden');
  if (curentPage === 2) {
    paginationIncrementBtn.classList.add('hidden');
  }
}

if (Math.ceil(numResults / newsPerPage) === 2) {
  paginationPostDots.classList.add('hidden');
  paginationDoubleIncrementBnt.classList.add('hidden');
  if (curentPage === 1) {
    paginationIncrementBtn.classList.add('hidden');
    paginationPervDots.classList.add('hidden');
  }
}

if (Math.ceil(numResults / newsPerPage) === 1) {
  paginationPostDots.classList.add('hidden');
  paginationDoubleIncrementBnt.classList.add('hidden');
}

if (Math.ceil(numResults / newsPerPage) === 0) {
  paginationPostDots.classList.add('hidden');
}

if (window.innerWidth <= 768) {
  paginationIncrementBtn.classList.add('hidden');
  paginationDoubleIncrementBnt.classList.add('hidden');
}

function onPaginationPerviosBtnClick() {
  curentPage -= 1;
  paginationRefresh();
  console.log(curentPage);
}

function onPaginationFirstBtnClick() {
  curentPage = 1;
  paginationRefresh();
  console.log(curentPage);
}

function onPaginationIncrementBtnClick() {
  curentPage += 1;
  paginationRefresh();
  console.log(curentPage);
}

function onPaginationDoubleIncrementBntClick() {
  curentPage += 2;
  paginationRefresh();
  console.log(curentPage);
}

function onPaginationLastBtnClick() {
  curentPage = Math.ceil(numResults / newsPerPage);
  paginationRefresh();
  console.log(curentPage);
}

function onPaginationNextBtnClick() {
  curentPage += 1;
  paginationRefresh();
  console.log(curentPage);
}

var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function paginatePopularNews(arr) {
  numResults = arr.length;
  paginationRefresh();
  const pageArr = arr.slice(
    (curentPage - 1) * newsPerPage,
    newsPerPage * curentPage
  );
  console.log(pageArr);
  // const res = await NewsApiServes.requestPopularNews;
  // console.log(res)
}

paginatePopularNews(arr);

function onPaginationClick(e) {
  if (e.target.nodeName === 'BUTTON') {
    paginatePopularNews(arr);
  }
}
