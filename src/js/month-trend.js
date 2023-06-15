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

    const randomData = Math.floor(Math.random() * data.results.length);
    const randomDataRes = data.results[randomData];

    console.log(randomDataRes);

    upcomingBox.insertAdjacentHTML(
      'beforeend',
      createUpcomingMarkup(randomDataRes, genres)
    );

    changeClick(randomDataRes.id);
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
  const genreNames = genre_ids
    .slice(0, 2)
    .map(genreId => genres[genreId])
    .join(', ');

  return `<div class="upcoming-container">
        <img src="https://image.tmdb.org/t/p/original${backdrop_path}" alt="${title}" class="upcom-img" /> 
        <div class="upcoming-container-about">
            <h3 class="upcom-movie-title color">${title}</h3>
                <ul class="upcoming-list">
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle color">Release date</p>
                        <p class="upcom-release-date ">${release_date}</p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle color">Vote / Votes</p>
                        <p class="upcom-vote"><span class="vote-span">${vote_average}</span> <span class="slash">&nbsp/&nbsp</span> <span class="vote-span">${vote_count}</span></p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle color">Popularity</p>
                        <p class="upcom-popularity popular color">${popularity.toFixed(
                          1
                        )}</p>
                    </li>
                    <li class="upcoming-list-item">
                        <p class="upcom-movie-subtitle color">Genre</p>
                        <p class="upcom-genre color">${genreNames}</p>
                    </li>
                </ul>
                <p class="upcom-movie-about-title color">ABOUT</p>
                <p class="color upcom-movie-about">${overview}</p>
                <button type="button" class="upcom-btn isActive">Add to my library</button>
            </div>
      </div>`;
}

function changeClick(id) {
  const upcomingBtn = document.querySelector('.upcom-btn');

  upcomingBtn.addEventListener('click', () => {
    if (upcomingBtn.classList.contains('isActive')) {
      upcomingBtn.classList.remove('isActive');
      upcomingBtn.textContent = 'Remove from my library';

      const movieIds = JSON.parse(localStorage.getItem('movieIds')) || [];
      if (!movieIds.includes(id)) {
        // проверяем, есть ли id фильма уже в массиве
        movieIds.push(id);
        localStorage.setItem('movieIds', JSON.stringify(movieIds));
      }

      console.log('Movie ID added to localStorage:', id);
    } else {
      upcomingBtn.classList.add('isActive');
      const movieIds = JSON.parse(localStorage.getItem('movieIds')) || [];
      const index = movieIds.indexOf(id);
      if (index !== -1) {
        // проверяем, есть ли id фильма в массиве
        movieIds.splice(index, 1); // удаляем id фильма из массива
        localStorage.setItem('movieIds', JSON.stringify(movieIds));
      }

      upcomingBtn.textContent = 'Add to my library';
      console.log('Movie ID removed to localStorage:', id);
    }
  });
}
