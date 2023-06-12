import { upcomingMovieGenreRequest } from './apikey.js';
import { upcomingMovieRequest } from './apikey.js';

const upcomingBox = document.querySelector('.upcom-js-list');

async function initUpcomingFetch() {
  try {
    let genres = {};
    const data = await upcomingMovieRequest();
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    upcomingBox.insertAdjacentHTML(
      'beforeend',
      createUpcomingMarkup(data.results[0], genres)
    );
  } catch (err) {
    console.log(err);
  }
}

initUpcomingFetch();

function createUpcomingMarkup(arr, genres) {
  const {
    release_date,
    vote_average,
    vote_count,
    backdrop_path,
    genre_ids,
    overview,
    title,
    popularity,
  } = arr;
  const genreNames = genre_ids.map(id => genres[id]);
  return `<div class="upcoming-container">
        <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" class="upcom-img" /> 
        <div class="upcoming-container-about">
            <h3 class="upcom-movie-title">${title}</h3>
                <ul class="upcoming-list">
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle">Release date</p>
                        <p class="upcom-release-date">${release_date}</p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle">Vote / Votes</p>
                        <p class="upcom-vote"><span class="vote-span">${vote_average}</span> <span class="slash">&nbsp/&nbsp</span> <span class="vote-span">${vote_count}</span></p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle">Popularity</p>
                        <p class="upcom-popularity">${popularity}</p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle">Genre</p>
                        <p class="upcom-genre">${genreNames}</p>
                    </li>
                </ul>
                <p class="upcom-movie-about-title">ABOUT</p>
                <p class="upcom-movie-about">${overview}</p>
                <button type="button" class="upcom-btn">Add to my library</button>
            </div>
      </div>`;
}
