import { trendMovieRequest } from './apikey.js';

const dayTrend = document.querySelector('.catalog-js');
console.log(dayTrend);

async function initCatalogFetch() {
  try {
    //   let genres = {};

    const data = await trendMovieRequest();
    console.log(data);
    //   const genresData = await upcomingMovieGenreRequest();

    //   genresData.forEach(genre => {
    //     genres[genre.id] = genre.name;
    //   });

    //   const randomData = Math.floor(Math.random() * data.results.length);
    //   const randomDataRes = data.results[randomData];

    //   console.log(randomDataRes);

    // dayTrend.insertAdjacentHTML(
    //     'beforeend',
    //     createUpcomingMarkup(randomDataRes, genres)
    //   );

    //   changeClick(randomDataRes.id);
  } catch (err) {
    console.log(err);
  }
}
