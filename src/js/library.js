import { libraryMovieQuery } from './apikey';

const libraryBox = document.querySelector('.library-js-list');
const localStorageId = JSON.parse(localStorage.getItem('movieIds'));
let localStorageArr = [];
let currentIndex = 0;

function serviceArrPagination(arr) {
  if (!arr) {
    return;
  }

  while (arr.length > 0) {
    if (
      localStorageArr.length === 0 ||
      localStorageArr[localStorageArr.length - 1].length === 9
    ) {
      localStorageArr.push([]);
    }
    localStorageArr[localStorageArr.length - 1].push(arr.shift());
  }
}

function btnMarkup() {
  if (localStorageArr.length > 1) {
    return `<button type="button" class="loadMore">Load more</button>`;
  } else {
  }
}

serviceArrPagination(localStorageId);

async function initLibraryFetch() {
  try {
    if (!localStorageId) {
      return;
    }
    const currentArray = localStorageArr[currentIndex];
    const data = await libraryMovieQuery(currentArray);

    currentIndex++;

    libraryBox.insertAdjacentHTML('beforeend', createLibraryMarkup(data));
    console.log(currentIndex);

    if (currentIndex < localStorageArr.length) {
      libraryBox.insertAdjacentHTML('beforeend', btnMarkup());
    }
    servicePagination();
    console.log();
  } catch (err) {
    console.log(err);
  }
}

function servicePagination() {
  const libraryBtn = document.querySelector('.loadMore');
  const libraryMoreButtons = document.querySelectorAll('.loadMore');
  console.log(localStorageArr.length);

  if (!libraryBtn) {
    return;
  }
  libraryBtn.addEventListener('click', () => {
    if (currentIndex < localStorageArr.length) {
      libraryMoreButtons.forEach(button => button.remove());
      initLibraryFetch();
    }
  });
}

function createLibraryMarkup(arr) {
  return arr
    .map(movie => {
      const { release_date, backdrop_path, genres, title, vote_average } =
        movie;
      const genreSliced = genres.slice(0, 1);
      const genreName = genreSliced.map(genre => genre.name).join(', ');

      return `<div class="library-container-item">
                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
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
                        <h3 class="library-movie-title">${title}</h3>     
                        <span class="library-genre-title">${genreName}</span><span class="library-genre-title"> | ${release_date.slice(
        0,
        4
      )}</span>   
                    </div> 
            </div>
            </div>
        </div>`;
    })
    .join('');
}

initLibraryFetch();

function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}
