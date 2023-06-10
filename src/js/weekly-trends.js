import axios from 'axios';
const date = new Date();

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
    //   console.log(data);
    //   return (console.log(data.results[0]));
    return data;
  } catch (error) {
    console.log(error);
  }
}

const list = document.querySelector('.weekly-trends-card-list');

serviseFilm()
  .then(data => {
    const film = data.results[0];
    console.log(film);
    const { id, title, poster_path, release_date, vote_average, genre_ids } =
      film;

    // console.log(id);
    // console.log(title);
    // console.log(poster_path);
    // console.log(date.getFullYear(release_date));
    // console.log(Number(vote_average.toFixed(1)));
    // console.log(genre_ids[0]);

    const markup = `<li class="card-film">
   <img src = "https://image.tmdb.org/t/p/w500${poster_path}" alt = "${title}" class="weekly-trends-film-img">
  <div class="film-info-poster">
  <h3 class="weekly-trends-film-title">${title}</h3><div class="weekly-trends-info">
  <span>${genre_ids[0]}</span>
  <span>|</span>
  <span>${date.getFullYear(release_date)}</span></div></div>
  <div class="weekly-trends-film-rating"><p>${Number(
    vote_average.toFixed(1)
  )}</p></div>
  
  </li>`;

    list.innerHTML = markup;
  })
  .catch(err => console.log(err));
