import { trendMovieRequest } from './apikey.js';
import { upcomingMovieGenreRequest } from './apikey.js';

const dayTrend = document.querySelector('.catalog-js');
console.log(dayTrend);

async function initCatalogFetch() {
  try {
    let genres = {};

    const data = await trendMovieRequest();
    console.log(data.results);
    console.log(data);
    const genresData = await upcomingMovieGenreRequest();

    genresData.forEach(genre => {
      genres[genre.id] = genre.name;
    });

    //   const randomData = Math.floor(Math.random() * data.results.length);
    //   const randomDataRes = data.results[randomData];

    //   console.log(randomDataRes);
    console.log(genres);

    dayTrend.insertAdjacentHTML(
      'beforeend',
      catalogTrendMarkup(data.results, genres)
    );

    //   changeClick(randomDataRes.id);
  } catch (err) {
    console.log(err);
  }
}

function catalogTrendMarkup(arr, genres) {
  return arr
    .map(movie => {
      const {
        release_date,
        backdrop_path,
        genre_ids,
        title,
        vote_average,
        name,
        first_air_date,
      } = movie;

      const genreSlice = genre_ids.slice(0, 2);

      const genreNames = genreSlice
        .map(genreId => {
          return genres[genreId];
        })
        .join(', ');

      //с бэкэнда на некоторые фильмы приходит не title, а name
      let filmName;
      if (!title) {
        filmName = name;
      } else {
        filmName = title;
      }

      let release;
      if (!release_date) {
        release = first_air_date;
      } else {
        release = release_date;
      }

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
                        <h3 class="library-movie-title">${filmName}</h3>     
                        <span class="library-genre-title">${genreNames}</span><span class="library-genre-title"> | ${release.slice(
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

initCatalogFetch();

export function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}

// $('#demo').pagination({
//   dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
//   callback: function(data, pagination) {
//       // template method of yourself
//       var html = template(data);
//       dataContainer.html(html);
//   }
// })
