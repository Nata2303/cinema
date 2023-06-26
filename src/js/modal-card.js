import { libraryMovieQuery } from './apikey';
import * as basicLightbox from 'basiclightbox';
import Notiflix from 'notiflix';

const libraryBox = document.querySelector('.library-js-list');
const localStorageId = JSON.parse(localStorage.getItem('movieIds'));
let localStorageArr = [];
let currentIndex = 0;
let modal; // Оголошення змінної modal

function searchPoster(data) {
  if (data.poster_path) {
    return {
      posterURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      imageClass: 'poster-img',
    };
  } else {
    return {
      posterURL: './img/trailer-modal-desk@2x.png',
      imageClass: 'picture-class',
    };
  }
}

/*---------------------Створює розмітку модалки з інформацією---------------------*/
function renderModalFilmMarkup(data) {
  const genreList = data.genres
    .map(genre => genre.name)
    .slice(0, 2)
    .join(', ');
  const vote = data.vote_average.toFixed(1);
  const popularity = data.popularity.toFixed(1);
  const voteCount = data.vote_count.toFixed(0);
  const { posterURL, imageClass } = searchPoster(data);

  return `
    <div class="modal-window">
      <button class="modal-close-btn">
         <svg class="modal-close-icon" width="100%" height="100%" >
            <use href="./images/sprite.svg#close" width="100%" height="100%"></use>
         </svg>
     </button>
     <div class="poster-wrapper">
     <img class="${imageClass}"   src="${posterURL}" alt="Movie poster">
     </div>
     <div class="about-film-wrapper">
      <h2 class="film-tittle">${data.original_title}</h2>
      <div class="film-wrapper">
        <ul class="first-film-list">
          <li class="about-film-item"> Vote / Votes</li>
          <li class="about-film-item">Popularity</li>
          <li class="about-film-item">Genre</li>
        </ul >
        <ul class="second-film-list ">
         <li class="about-film-item "> <span class ="vote">${vote}</span> / <span class ="vote">${voteCount}</span></li>
         <li class="about-film-item">${popularity}</li>
         <li class="about-film-item">${genreList}</li>
        </ul>
      </div>
     <p class=" about-tittle">About </p>
     <p class="about-film-story ">${data.overview} </p>
     <button class="button btn-border-dark add-film-btn">Add to my library</button>
     </div>
    </div>`;
}

let instance;
const bodyElement = document.querySelector('body');

function normalizeData(data) {
  const genreIds = data.genres.map(el => el.id);
  data.genre_ids = genreIds;
}

/*--------------отримує і відображає фільм в модальному вікні----------------*/
export async function getMovie(currentArray) {
  bodyElement.style.overflow = 'hidden';

  try {
    const data = await libraryMovieQuery(currentArray);
    if (data && data.poster_path && data.genres && data.original_title && data.vote_average && data.popularity && data.vote_count && data.overview) {
      normalizeData(data);
      const markup = renderModalFilmMarkup(data);
      // Show the modal with the markup
      instance = basicLightbox.create(markup, {
        // ...
      });
      instance.show();
    } else {
      throw new Error('Movie data is undefined or incomplete');
    }
  } catch (error) {
    Notiflix.Notify.failure('Sorry, the movie information is not available');
    console.log('Error fetching movie data:', error);
  }
}
// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  instance.close();
  document.body.style.overflow = 'auto';
}

function closeModalOnKey(e) {
  if (e.code !== 'Escape') return;
  instance.close();
  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', closeModalOnKey);
}

document.addEventListener('DOMContentLoaded', () => {
  modal = document.querySelector('.modal-window');

  libraryBox.addEventListener('click', e => {
    const target = e.target;
    if (target.tagName !== 'DIV' && target.tagName !== 'IMG') {
      return;
    }
    const currentId = parseInt(
      target.closest('.library-container-item').dataset.id,
      10
    );
    getMovie(currentId);
  });
});

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
    return `<button type="button" class="loadMore loadMoreStyle">Load more</button>`;
  } else {
    return '';
  }
}

serviceArrPagination(localStorageId);

async function initLibraryFetch() {
  try {
    if (!localStorageId || !Array.isArray(localStorageId)) {
      return;
    }
    const currentArray = localStorageArr[currentIndex];
    const data = await api(currentArray);

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
                            <div class="rating-view">
                                <span class="star-icon"></span>
                                <span class="rating">${vote_average}</span>
                            </div>
                        </div>
                    </div>
                <div class="film-discription">
                    <h2 class="film-discription-tittle">${title}</h2>
                    <p class="release-date"> ${release_date}</p>
                    <p class="genres">${genreName}</p>
                </div>
            </div>
        </div>`;
    })
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  modal = document.querySelector('.modal-window'); // Присвоєння значення змінній modal

  initLibraryFetch();

  libraryBox.addEventListener('click', e => {
    const target = e.target;
    if (target.nodeName !== 'DIV' && target.nodeName !== 'IMG') {
      return;
    }
    const currentId = parseInt(
      e.target.closest('.library-container-item').dataset.id,
      10
    );
    getMovie(currentId);
  });
});

// import { libraryMovieQuery } from './apikey';
// import * as basicLightbox from 'basiclightbox';
// import Notiflix from 'notiflix';

// function searchPoster(data) {
//   if (data.poster_path) {
//     return {
//       posterURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
//       imageClass: 'poster-img',
//     };
//   } else {
//     return {
//       posterURL: './img/trailer-modal-desk@2x.png',
//       imageClass: 'picture-class',
//     };
//   }
// }

// /*---------------------Створює розмітку модалки з інформацією---------------------*/
// function renderModalFilmMarkup(data) {
//   const genreList = data.genres
//     .map(genre => genre.name)
//     .slice(0, 2)
//     .join(', ');
//   const vote = data.vote_average.toFixed(1);
//   const popularity = data.popularity.toFixed(1);
//   const voteCount = data.vote_count.toFixed(0);
//   const { posterURL, imageClass } = searchPoster(data);

//   return `
//     <div class="modal-window">
//       <button class="modal-close-btn">
//          <svg class="modal-close-icon" width="100%" height="100%" >
//             <use href="./images/sprite.svg#close" width="100%" height="100%"></use>
//          </svg>
//      </button>
//      <div class="poster-wrapper">
//      <img class="${imageClass}"   src="${posterURL}" alt="Movie poster">
//      </div>
//      <div class="about-film-wrapper">
//       <h2 class="film-tittle">${data.original_title}</h2>
//       <div class="film-wrapper">
//         <ul class="first-film-list">
//           <li class="about-film-item"> Vote / Votes</li>
//           <li class="about-film-item">Popularity</li>
//           <li class="about-film-item">Genre</li>
//         </ul >
//         <ul class="second-film-list ">
//          <li class="about-film-item "> <span class ="vote">${vote}</span> / <span class ="vote">${voteCount}</span></li>
//          <li class="about-film-item">${popularity}</li>
//          <li class="about-film-item">${genreList}</li>
//         </ul>
//       </div>
//      <p class=" about-tittle">About </p>
//      <p class="about-film-story ">${data.overview} </p>
//      <button class="button btn-border-dark add-film-btn">Add to my library</button>
//      </div>
//     </div>`;
// }

// let instance;
// const bodyElement = document.querySelector('body');

// //============================================================================
// function normalizeData(data) {
//   const genreIds = data.genres.map(el => el.id);
//   data.genre_ids = genreIds;
// }

// /*--------------отримує і відображає фільм в модальному вікні----------------*/
// export async function getMovie(movie_id) {
//   bodyElement.style.overflow = 'hidden';

//   try {
//     const data = await libraryMovieQuery(movie_id);
//     normalizeData(data);

//     const markup = renderModalFilmMarkup(data);

//     instance = basicLightbox.create(markup, {
//       closable: true,
//       onShow: instance => {
//         instance
//           .element()
//           .querySelector('.modal-close-btn')
//           .addEventListener('click', () => {
//             instance.close();
//             bodyElement.style.overflow = 'auto';
//           });
//         document.addEventListener('keydown', closeModalOnKey);
//       },
//       onClose: instance => {
//         instance
//           .element()
//           .querySelector('.modal-close-btn')
//           .removeEventListener('click', () => {
//             instance.close();
//             bodyElement.style.overflow = 'auto';
//           });
//         document.removeEventListener('keydown', closeModalOnKey);
//         bodyElement.style.overflow = 'auto';
//       },
//       onOverlayClick: () => {
//         closeModal();
//       },
//     });
//     instance.show();
//   } catch (error) {
//     Notiflix.Notify.failure('Sorry, the movie is not found ');
//     console.log('Помилка отримання даних:', error);
//   }
// }

// // Функція для відкриття модального вікна
// function openModal() {
//   modal.style.display = 'block';
// }

// function closeModal() {
//   instance.close();
//   bodyElement.style.overflow = 'auto';
// }
// function closeModalOnKey(e) {
//   if (e.code !== 'Escape') return;
//   instance.close();
//   bodyElement.style.overflow = 'auto';
//   document.removeEventListener('keydown', closeModalOnKey);
// }
