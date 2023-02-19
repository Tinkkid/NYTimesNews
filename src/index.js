const btn = document.querySelector('.btn')
btn.addEventListener('click', onBtnSubmit)
import { onBtnSubmit } from "./js/onBtnSubmit"

import { onFvBtn } from "./js/onFavoriteBtn"
const newsBoxEl = document.querySelector('.news-container') 
newsBoxEl.addEventListener('click', onFvBtn)