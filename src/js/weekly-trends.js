import { api } from './api';
import { upcomingMovieGenreRequest } from './apikey.js';
import { getMovie } from './modal-card';

const list = document.querySelector('.weekly-trends-card-list');
const date = new Date();
// const ratindg = document.querySelector('.rating-active');
const screenWidth = window.innerWidth;

// Фетч АРІ
async function weeklyTrendsRequest() {
  try {
    const response = await api.get(
      '/trending/all/week?api_key=7f4ba582d55c3d33bf97672c5d45e075'
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

// Обробка
async function initWeeklyTrendsFetch() {
  try {
    let genres = {};

    const data = await weeklyTrendsRequest();
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    if (screenWidth >= 768) {
      const films = data.results.slice(0, 3);
      console.log(films);
      list.insertAdjacentHTML(
        'beforeend',
        createWeeklyTrendsMarkup(films, genres)
      );
    } else {
      const films = data.results.slice(0, 1);
      console.log(films);
      list.insertAdjacentHTML(
        'beforeend',
        createWeeklyTrendsMarkup(films, genres)
      );
    }
  } catch (err) {
    console.log(err);
  }
}

initWeeklyTrendsFetch();

// Розмітка
function createWeeklyTrendsMarkup(arr, genres) {
  return arr
    .map(
      ({
        id,
        title,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
      }) => `<li class="card-film"><div class="card-container">
<img src = "https://image.tmdb.org/t/p/w500${poster_path}" alt = "${title}" class="weekly-trends-film-img">
<div class="wt-gradient"></div>
<div class="film-info-poster">
<h3 class="weekly-trends-film-title">${title}</h3><div class="weekly-trends-info">
<span class="genre">${genre_ids
        .slice(0, 2)
        .map(genreId => genres[genreId])
        .join(', ')}</span>
<span>|</span>
<span>${date.getFullYear(release_date)}</span></div></div>
<div class="rating weekly-trends-film-rating"><div class="rating-body">
<div class="rating-active" style="width: ${convertRatingToPercentage(
        vote_average
      )}%;"></div>
<div class="rating-items">
<input type="radio" class="reting-item" value="1" name="rating">
<input type="radio" class="reting-item" value="2" name="rating">
<input type="radio" class="reting-item" value="3" name="rating">
<input type="radio" class="reting-item" value="4" name="rating">
<input type="radio" class="reting-item" value="5" name="rating">
</div>
</div>
</div>
</div>
</li>`
    )
    .join('');
}

//   Зірочки
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);
  }
}

function initRating(rating) {
  initRatingVars(rating);
  setRetingActiveWidth();
}

function initRatingVars(rating) {
  ratingActive = rating.querySelector('.rating-active');
  ratingValue = rating.querySelector('.rating-value');
}

function setRetingActiveWidth(index = ratingValue.innerHTML) {
  const ratingActiveWidth = parseFloat(ratingValue.innerHTML) / 0.05;
  ratingActive.style.width = `${ratingActiveWidth}%`;
}

function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}

// Прослуховувач на картку
// list.addEventListener('click', onClick);

// function onClick(event) {
//   const clickCard = event.target;

//   if (event.target.nodeName !== 'DIV') {
//     return;
//   } console.dir(clickCard);//
// }
