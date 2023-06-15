import axios from 'axios';
const date = new Date();
let genreNames = [];
let genreNames2 = [];
let genreNames3 = [];
let hewgGenreNames = '';
let hewgGenreNames2 = '';
let hewgGenreNames3 = '';
const screenWidth = window.innerWidth;

async function serviseFilm() {
  try {
    const URL =
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0',
      },
    };
    const response = await axios.get(`${URL}`, options);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

const list = document.querySelector('.weekly-trends-card-list');
const ratindg = document.querySelector('.rating-active');

serviseFilm().then(data => {
  const film = data.results[0];
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    film;

  const ratingInPercent = convertRatingToPercentage(vote_average);

  serviseGenre()
    .then(genresData => {
      const genre = document.querySelector('.genre');

      for (const genreData of genresData) {
        if (genre_ids.includes(genreData.id)) {
          genreNames.push(genreData.name);
        }
      }
      hewgGenreNames = genreNames.join(', ');
      genre.textContent = `${hewgGenreNames}`;
    })
    .catch(err => console.log(err));

  const markup = `<li class="card-film"><div class="card-container">
  <img src = "https://image.tmdb.org/t/p/w500${poster_path}" alt = "${title}" class="weekly-trends-film-img">
  <div class="wt-gradient"></div>
  <div class="film-info-poster">
  <h3 class="weekly-trends-film-title">${title}</h3><div class="weekly-trends-info">
  <span class="genre">${hewgGenreNames}</span>
  <span>|</span>
  <span>${date.getFullYear(release_date)}</span></div></div>
  <div class="rating weekly-trends-film-rating"><div class="rating-body">
  <div class="rating-active" style="width: ${ratingInPercent}%;"></div>
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
</li>`;
  list.insertAdjacentHTML('beforeend', markup);

  if (screenWidth >= 768) {
    const film2 = data.results[2];
    const id2 = film2.id;
    const title2 = film2.title;
    const poster_path2 = film2.poster_path;
    const release_date2 = film2.release_date;
    const vote_average2 = film2.vote_average;
    const genre_ids2 = film2.genre_ids;

    const ratingInPercent2 = convertRatingToPercentage(vote_average2);

    serviseGenre()
      .then(genresData => {
        const genre2 = document.querySelector('.genre2');

        for (const genreData of genresData) {
          if (genre_ids2.includes(genreData.id)) {
            genreNames2.push(genreData.name);
          }
        }
        hewgGenreNames2 = genreNames2.join(', ');
        genre2.textContent = `${hewgGenreNames2}`;
      })
      .catch(err => console.log(err));

    const markup2 = `<li class="card-film"><div class="card-container">
      <img src = "https://image.tmdb.org/t/p/w500${poster_path2}" alt = "${title2}" class="weekly-trends-film-img">
      <div class="wt-gradient"></div>
      <div class="film-info-poster">
      <h3 class="weekly-trends-film-title">${title2}</h3><div class="weekly-trends-info">
      <span class="genre2">${hewgGenreNames2}</span>
      <span>|</span>
      <span>${date.getFullYear(release_date2)}</span></div></div>
      <div class="rating weekly-trends-film-rating"><div class="rating-body">
      <div class="rating-active" style="width: ${ratingInPercent2}%;"></div>
      <div class="rating-items">
            <input type="radio" class="reting-item" value="1" name="rating"></>
            <input type="radio" class="reting-item" value="2" name="rating"></>
            <input type="radio" class="reting-item" value="3" name="rating"></>
            <input type="radio" class="reting-item" value="4" name="rating"></>
            <input type="radio" class="reting-item" value="5" name="rating"></>
        </div>
    </div>
    </div>
    </div>
    </li>`;
    list.insertAdjacentHTML('beforeend', markup2);

    const film3 = data.results[6];

    const id3 = film3.id;
    const title3 = film3.title;
    const poster_path3 = film3.poster_path;
    const release_date3 = film3.release_date;
    const vote_average3 = film3.vote_average;
    const genre_ids3 = film3.genre_ids;

    const ratingInPercent3 = convertRatingToPercentage(vote_average3);

    serviseGenre()
      .then(genresData => {
        const genre3 = document.querySelector('.genre3');

        for (const genreData of genresData) {
          if (genre_ids3.includes(genreData.id)) {
            genreNames3.push(genreData.name);
          }
        }
        hewgGenreNames3 = genreNames3.join(', ');
        genre3.textContent = `${hewgGenreNames3}`;
      })
      .catch(err => console.log(err));

    const markup3 = `<li class="card-film"><div class="card-container">
      <img src = "https://image.tmdb.org/t/p/w500${poster_path3}" alt = "${title3}" class="weekly-trends-film-img">
      <div class="wt-gradient"></div>
      <div class="film-info-poster">
      <h3 class="weekly-trends-film-title">${title3}</h3><div class="weekly-trends-info">
      <span class="genre3">${hewgGenreNames3}</span>
      <span>|</span>
      <span>${date.getFullYear(release_date3)}</span></div></div>
      <div class="rating weekly-trends-film-rating"><div class="rating-body">
      <div class="rating-active" style="width: ${ratingInPercent3}%;"></div>
      <div class="rating-items">
            <input type="radio" class="reting-item" value="1" name="rating"></>
            <input type="radio" class="reting-item" value="2" name="rating"></>
            <input type="radio" class="reting-item" value="3" name="rating"></>
            <input type="radio" class="reting-item" value="4" name="rating"></>
            <input type="radio" class="reting-item" value="5" name="rating"></>
        </div>
    </div>
    </div>
    </div>
    </li>`;
    list.insertAdjacentHTML('beforeend', markup3);
  }
});

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

// Жанри
async function serviseGenre() {
  try {
    const URL = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0',
      },
    };
    const response = await axios.get(`${URL}`, options);
    const genresData = response.data.genres;
    return genresData;
  } catch (err) {
    console.log(err);
  }
}
