import { searchRequest } from './apikey';
import { upcomingMovieGenreRequest } from './apikey';
import Notiflix from 'notiflix';
// import { catalogTrendMarkup } from './catalog';
import { renderCatalog } from './catalog';
// import { initCatalogFetch } from './catalog';
let genres;

const searchForm = document.querySelector('.catalog-form');
const filmSearchList = document.querySelector('.js-catalog-search');
// let searchQuery = '';

console.log(searchForm);
console.log(filmSearchList);

searchForm.addEventListener('submit', handleSearch);

async function handleSearch(evt) {
  evt.preventDefault();

  genres = {};

  formEvt = evt.currentTarget.elements.catalogSearchQuery.value;

  const movieRequest = await searchRequest(formEvt);
  const genresData = await upcomingMovieGenreRequest();

  genresData.forEach(genre => {
    genres[genre.id] = genre.name;
  });

  if (formEvt.length > 1) {
    renderCatalog(movieRequest.results, genres);
    console.log(movieRequest.results);
  }

  //   const data = new FormData(evt.currentTarget);
  //   const inputValue = data.get('searchQuery');

  //   searchQuery = inputValue;
  //   console.log(searchQuery);

  //   if (!searchQuery) {
  //     console.log('aaa');
  //     return;
  //   }

  //   serviceMovie(searchQuery);
}

// export function renderCatalog(arr, genres) {
//     dayTrend.innerHTML = ''; // Clear the container

//     const htmlMarkup = catalogTrendMarkup(arr, genres);
//     dayTrend.insertAdjacentHTML('beforeend', htmlMarkup);
//   }
