const axios = require('axios').default;
const NEWS_URL = 'https://api.nytimes.com/svc/';
const NEWS_API_KEY = '58DF9bTBBQf2RU8WY5JE6TkVJf8iLJ4A';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const WEATHER_API_KEY = '26ee5cfba4c9a8162c8c1ca031ae1bc4';

export default class NewsApiServes {
  constructor() {
    this.searchQuery = '';
    this.categoryQuery = '';
    this.setDate = '';
    this.offset = 0;
    this.limit = 0;
    this.page = 0;
  }

  async requestListCategories() {
    const response = await axios.get(
      `${NEWS_URL}news/v3/content/section-list.json?api-key=${NEWS_API_KEY}`
    );

    return response;
  }

  async requestPopularNews() {
    const response = await axios.get(
      `${NEWS_URL}mostpopular/v2/viewed/1.json?api-key=${NEWS_API_KEY}`
    );

    return response.data;
  }

  async requestWeatherApi(lat, lon) {
    const response = await axios.get(
      `${WEATHER_URL}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );

    return response.data;
  }

  async searchNewsOnClick() {
    this.sizeScreenCompute();

    const response = await axios.get(
      `${NEWS_URL}news/v3/content/all/${this.categoryQuery}.json?limit=${this.limit}&offset=${this.offset}&api-key=${NEWS_API_KEY}`
    );

    return response.data;
  }

  async searchNewsByInputAndDate() {
    const response = await axios.get(
      `${NEWS_URL}search/v2/articlesearch.json?q=${this.searchQuery}&fq=&begin_date=${this.setDate}&end_date=${this.setDate}&page=${this.page}&api-key=${NEWS_API_KEY}`
    );

    return response.data;
  }

  sizeScreenCompute() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.limit = 4;
    } else if (window.matchMedia('(max-width: 1280px)').matches) {
      this.limit = 7;
    } else {
      this.limit = 8;
    }
  }

  incrementPagination() {
    this.offset += this.limit;
  }

  decrementPagination() {
    this.offset -= this.limit;
  }

  resetOffset() {
    this.offset = 0;
  }
  offset() {
    return this.offset;
  }

  limit() {
    return this.limit;
  }

  pageIncrementPagination() {
    this.page += 1;
  }

  pageDecrementPagination() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 0;
  }

  page() {
    return this.page;
  }

  setDate(newDate) {
    this.setDate = newDate;
  }

  get category() {
    return this.categoryQuery;
  }

  set category(newCategory) {
    this.categoryQuery = newCategory;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newSearch) {
    this.searchQuery = newSearch;
  }
}
