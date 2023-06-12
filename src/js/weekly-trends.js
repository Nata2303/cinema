import axios from 'axios';
const date = new Date();
let genreNames = [];
let hewgGenreNames = '';

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

serviseFilm()
  .then(data => {
    const film = data.results[10];
    const { id, title, poster_path, release_date, vote_average, genre_ids } =
      film;

    const ratindg = document.querySelector('.rating-active');
    ratingInPercent = convertRatingToPercentage(vote_average);

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
  <div class="film-info-poster">
  <h3 class="weekly-trends-film-title">${title}</h3><div class="weekly-trends-info">
  <span class="genre">${hewgGenreNames}</span>
  <span>|</span>
  <span>${date.getFullYear(release_date)}</span></div></div>
  <div class="rating weekly-trends-film-rating"><div class="rating-body">
  <div class="rating-active" style="width: ${ratingInPercent}%;"></div>
  <div class="rating-items">
        <input type="radio" class="reting-item" value="1" name="rating"></>
        <input type="radio" class="reting-item" value="2" name="rating"></>
        <input type="radio" class="reting-item" value="3" name="rating"></>
        <input type="radio" class="reting-item" value="4" name="rating"></>
        <input type="radio" class="reting-item" value="5" name="rating"></>
    </div>
</div>
</div>
</li>`;
    list.innerHTML = markup;
  })
  .catch(err => console.log(err));

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
