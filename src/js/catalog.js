import { trendMovieRequest } from './apikey.js';
import { upcomingMovieGenreRequest } from './apikey.js';

const dayTrend = document.querySelector('.catalog-js');
const paginationContainer = document.querySelector('.pagination-container');
let currentPage = 1;
let trendData;
let genres;

///////////

///////////

export async function initCatalogFetch() {
  try {
    genres = {};
    trendData = await trendMovieRequest(currentPage);
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    console.log(trendData.results);

    renderCatalog(trendData.results, genres);

    setupPagination();
  } catch (err) {
    console.log(err);
  }
}

function setupPagination() {
  const totalPages = 25;
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
    currentPage = pageNumber;
    console.log(currentPage);
    trendData = await trendMovieRequest(currentPage);
    renderCatalog(trendData.results, genres);
    setupPagination(trendData.total_pages);
  });

  pageDiv.appendChild(pageLink);
  paginationContainer.appendChild(pageDiv);
}

function formatPageNumber(pageNumber) {
  // Добавляем ведущий ноль, если номер страницы меньше 10
  return pageNumber < 10 ? `0${pageNumber}` : pageNumber.toString();
}

function addEllipsis() {
  const ellipsisSpan = document.createElement('span');
  ellipsisSpan.textContent = '...';
  paginationContainer.appendChild(ellipsisSpan);
}

function addPrevPageLink() {
  const prevPageLink = document.createElement('a');
  prevPageLink.href = '#';
  prevPageLink.textContent = '<';
  prevPageLink.addEventListener('click', async function () {
    currentPage -= 1;
    console.log(currentPage);
    trendData = await trendMovieRequest(currentPage);
    renderCatalog(trendData.results, genres);
    setupPagination(trendData.total_pages);
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
    trendData = await trendMovieRequest(currentPage);
    renderCatalog(trendData.results, genres);
    setupPagination(trendData.total_pages);
  });
  paginationContainer.appendChild(nextPageLink);
}

export function renderCatalog(arr, genres) {
  dayTrend.innerHTML = ''; // Clear the container

  const htmlMarkup = catalogTrendMarkup(arr, genres);
  dayTrend.insertAdjacentHTML('beforeend', htmlMarkup);
}

export function catalogTrendMarkup(arr, genres) {
  return arr
    .map(movie => {
      const {
        release_date,
        backdrop_path,
        genre_ids,
        title,
        vote_average,
        name,
        poster_path,
      } = movie;

      const genreSlice = genre_ids;

      const genreNames = genreSlice
        .map(genreId => {
          return genres[genreId];
        })
        .join(', ');

      //с бэкэнда на некоторые фильмы приходит не title, а name
      let filmName;
      if (!title) {
        filmName = name;
      } else {
        filmName = title;
      }

      let release = release_date.slice(0, 4);
      if (!release || release === '') {
        release = 'unknown';
      }

      let poster;
      if (!backdrop_path) {
        poster = poster_path;
      } else {
        poster = backdrop_path;
      }

      return `<div class="library-container-item">
                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${poster});">
                <div class="rating-libr rating-library">
                        <div class="rating-body">
                            <div class="rating-active" style="width: ${convertRatingToPercentage(
                              vote_average
                            )}%;"></div>
                            <div class="rating-items">
                                <input type="radio" class="reting-item" value="1" name="rating"></>
                                <input type="radio" class="reting-item" value="2" name="rating"></>
                                <input type="radio" class="reting-item" value="3" name="rating"></>
                                <input type="radio" class="reting-item" value="4" name="rating"></>
                                <input type="radio" class="reting-item" value="5" name="rating"></>
                            </div>
                            </div>
                        </div>
                    <div class="library-container-about">
                        <h3 class="library-movie-title">${filmName}</h3>     
                        <span class="library-genre-title">${genreNames}</span><span class="library-genre-title"> | ${release}</span>   
                    </div> 
            </div>
            </div>
        </div>`;
    })
    .join('');
}

initCatalogFetch();

export function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}
