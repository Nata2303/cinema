import { libraryMovieQuery } from './apikey';
import { upcomingMovieGenreRequest } from './apikey';

const libraryBox = document.querySelector('.library-js-list');
const selectGenre = document.querySelector('#js-library-select');
const localStorageId = JSON.parse(localStorage.getItem('movieIds'));

let localStorageArr = [];
let currentIndex = 0;

function getGenres(genres) {
  genres.forEach(genre => {
    const optionElem = document.createElement('option');
    optionElem.value = genre.name;
    optionElem.textContent = genre.name;
    optionElem.classList.add('optionSelect');
    selectGenre.append(optionElem);
  });
}
serviceArrPagination(localStorageId);

async function initLibraryFetch() {
  try {
    if (!localStorageId) {
      return;
    }
    const currentArray = localStorageArr[currentIndex];
    const data = await libraryMovieQuery(currentArray);
    const libraryGenres = await upcomingMovieGenreRequest();

    getGenres(libraryGenres);

    selectGenre.addEventListener('change', evt => {
      const selectedGenre = evt.target.value;

      if (selectedGenre === 'Genre') {
        libraryBox.innerHTML = '';
        libraryBox.insertAdjacentHTML('beforeend', createLibraryMarkup(data));

        if (currentIndex < localStorageArr.length) {
          libraryBox.insertAdjacentHTML('beforeend', btnMarkup());
          servicePagination();
        }
      } else {
        const filteredMovies = data.filter(movie => {
          const genreOption = movie.genres.some(
            genre => genre.name === selectedGenre
          );
          console.log(selectedGenre);
          return genreOption;
        });
        libraryBox.innerHTML = '';
        libraryBox.insertAdjacentHTML(
          'beforeend',
          createLibraryMarkup(filteredMovies)
        );
      }
    });

    currentIndex++;

    libraryBox.insertAdjacentHTML('beforeend', createLibraryMarkup(data));

    if (currentIndex < localStorageArr.length) {
      libraryBox.insertAdjacentHTML('beforeend', btnMarkup());
    }
    servicePagination();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function servicePagination() {
  const libraryBtn = document.querySelector('.loadMore');
  const libraryMoreButtons = document.querySelectorAll('.loadMore');

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

export function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}

function btnMarkup() {
  if (localStorageArr.length > 1) {
    return `<button type="button" class="loadMore loadMoreStyle">Load more</button>`;
  } else {
  }
}

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
