import { searchRequest } from './apikey';
import { upcomingMovieGenreRequest } from './apikey';
import Notiflix from 'notiflix';
import { renderCatalog } from './catalog';
import { dayTrend } from './catalog';
import { paginationContainer } from './catalog';
import { formatPageNumber } from './catalog';
import { addEllipsis } from './catalog';
import { initCatalogFetch } from './catalog';

let genres;
let currentPage = 1;
let movieRequest;
let paginationVisible = true;

const searchForm = document.querySelector('.catalog-form');
const filmSearchList = document.querySelector('.js-catalog-search');
const yearSelect = document.querySelector('#js-search-select');
const iconClose = document.querySelector('.js-icon-close');

function createSelect() {
  const currentYear = new Date().getFullYear();

  for (let i = 1940; i <= currentYear; i++) {
    const option = document.createElement('option');
    option.classList.add('selectOption');
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
  }
}

createSelect();

searchForm.addEventListener('submit', handleSearch);

async function handleSearch(evt) {
  try {
    evt.preventDefault();
    paginationContainer.innerHTML = '';

    genres = {};

    formEvt = evt.currentTarget.elements.catalogSearchQuery.value;
    formYear = evt.currentTarget.elements.select.value;

    movieRequest = await searchRequest(formEvt, formYear, currentPage);
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    if (formEvt.length === 0) {
      // iconClose.style.display = 'none';
      dayTrend.innerHTML = '';
      initCatalogFetch();
    }

    if (formEvt.length > 1) {
      dayTrend.innerHTML = '';
      renderCatalog(movieRequest.results, genres);
    }

    if (movieRequest.results.length === 0) {
      paginationVisible = false;
      dayTrend.innerHTML = `<div class="opsContainer">
        <p class="opsText">OOPS...<br>We are very sorry!<br>We don't have any results matching your search</p>
      </div>`;
    } else {
      paginationVisible = true;
    }

    if (!paginationVisible) {
      paginationContainer.style.display = 'none';
    } else {
      paginationContainer.style.display = 'flex';
    }
    setupPaginationSearch(movieRequest.total_pages);
  } catch (err) {
    console.log(err);
  }
}

function setupPaginationSearch(movieTotalPages) {
  if (!paginationVisible) {
    return;
  }
  let totalPages = movieTotalPages;

  paginationContainer.innerHTML = '';

  const maxVisiblePages = 5; // Максимальное количество видимых страниц, включая символ "..."
  const halfVisiblePages = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(currentPage - halfVisiblePages, 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  if (currentPage > 1) {
    addPrevPageLink(); // Добавляем стрелку "<" для перехода на предыдущую страницу
  }

  if (startPage > 1) {
    addPageLink(1); // Добавляем ссылку на первую страницу
    if (startPage > 2) {
      addEllipsis(); // Добавляем символ "..." для скрытых страниц
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    addPageLink(i); // Добавляем ссылки на видимые страницы
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      addEllipsis(); // Добавляем символ "..." для скрытых страниц
    }
    addPageLink(totalPages); // Добавляем ссылку на последнюю страницу
  }

  if (currentPage < totalPages) {
    addNextPageLink(); // Добавляем стрелку ">" для перехода на следующую страницу
  }
}

function addPageLink(pageNumber) {
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('page-number');
  const pageLink = document.createElement('a');
  pageLink.classList = 'catalog-pagination-link';
  pageLink.href = '#';
  pageLink.textContent = formatPageNumber(pageNumber);

  if (pageNumber === currentPage) {
    pageLink.classList.add('active');
    pageDiv.classList.add('active');
  }

  pageLink.addEventListener('click', async function () {
    if (!paginationVisible) {
      return;
    }
    currentPage = pageNumber;
    console.log(currentPage);
    movieRequest = await searchRequest(formEvt, formYear, currentPage);
    renderCatalog(movieRequest.results, genres);
    setupPaginationSearch(movieRequest.total_pages);
  });

  pageDiv.appendChild(pageLink);
  paginationContainer.appendChild(pageDiv);
}

function addPrevPageLink() {
  const prevPageLink = document.createElement('a');
  prevPageLink.href = '#';
  prevPageLink.textContent = '<';
  prevPageLink.addEventListener('click', async function () {
    currentPage -= 1;
    console.log(currentPage);
    const movieRequest = await searchRequest(formEvt, formYear, currentPage);
    renderCatalog(movieRequest.results, genres);
    setupPaginationSearch(movieRequest.total_pages);
  });
  paginationContainer.appendChild(prevPageLink);
}

function addNextPageLink() {
  const nextPageLink = document.createElement('a');
  nextPageLink.href = '#';
  nextPageLink.textContent = '>';
  nextPageLink.addEventListener('click', async function () {
    currentPage += 1;
    console.log(currentPage);
    const movieRequest = await searchRequest(formEvt, formYear, currentPage);
    renderCatalog(movieRequest.results, genres);
    setupPaginationSearch(movieRequest.total_pages);
  });
  paginationContainer.appendChild(nextPageLink);
}

// function addWrongBtn() {
//   dayTrend.innerHTML = `<div><p class="opsText">OOPS... <br> We are very sorry!<br> You don't have any movies at your library </p>
//   </div>`;
//   const wrongBtn = document.createElement('button');
//   wrongBtn.classList.add('wrongBtn');
//   wrongBtn.textContent = 'Search Movie';
//   dayTrend.append(wrongBtn);
//   paginationContainer.style.display = 'none';
//   searchForm.style.display = 'none';

//   wrongBtn.addEventListener('click', () => {
//     searchForm.reset();
//     initCatalogFetch();
//     handleSearch();
//     paginationContainer.style.display = 'flex';
//     searchForm.style.display = 'flex';
//   });
// }
