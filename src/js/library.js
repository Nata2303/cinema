import { libraryMovieQuery } from './apikey';

const libraryBox = document.querySelector('.library-js-list');
const localStorageId = localStorage.getItem('movieId');

async function initLibraryFetch() {
  try {      
      if (!localStorageId) {
        return
    }
    const data = await libraryMovieQuery(localStorageId);

    console.log(data);
    libraryBox.insertAdjacentHTML('beforeend', createLibraryMarkup(data));
  } catch (err) {
    console.log(err);
  }
}

function createLibraryMarkup(arr) {
    const { release_date, backdrop_path, genres, title, vote_average} = arr;
    const genreSliced = genres.slice(0, 2);
    const genreName = genreSliced.map(genre => genre.name).join(", ");
    console.log(vote_average);
    return `<div class="library-container">
            <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
               <div class="library-container-about">
                     <h3 class="library-movie-title">${title}</h3>     
                    <span class="library-genre-title">${genreName}</span><span class="library-genre-title"> | ${release_date.slice(0, 4)}</span>   
               </div> 
               <div class="library-rating"></div>
          </div>
         </div>`;
};

initLibraryFetch();

//   Зірочки
// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
//   initRatings();
// }

// function initRatings() {
//   let ratingActive, ratingValue;
//   for (let i = 0; i < ratings.length; i++) {
//     const rating = ratings[i];
//     initRating(rating);
//   }
// }

// function initRating(rating) {
//   initRatingVars(rating);
//   setRetingActiveWidth();
// }

// function initRatingVars(rating) {
//   ratingActive = rating.querySelector('.rating-active');
//   ratingValue = rating.querySelector('.rating-value');
// }

// function setRetingActiveWidth(index = ratingValue.innerHTML) {
//   const ratingActiveWidth = parseFloat(ratingValue.innerHTML) / 0.05;
//   ratingActive.style.width = `${ratingActiveWidth}%`;
// }

// function convertRatingToPercentage(rating) {
//   // Перетворюємо рейтинг у відсотки
//   const percentage = (rating / 10) * 100;

//   // Округлюємо значення до двох знаків після коми
//   const roundedPercentage = Math.round(percentage * 100) / 100;

//   return roundedPercentage;
// }