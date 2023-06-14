import { libraryMovieQuery } from './apikey';

const libraryBox = document.querySelector('.library-js-list');
const localStorageId = JSON.parse(localStorage.getItem('movieIds'));


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
    // console.log(arr);
    // const { release_date, backdrop_path, genres, title, vote_average} = arr;
    // const genreSliced = genres.slice(0, 2);
    // const genreName = genreSliced.map(genre => genre.name).join(", ");
    
       return arr.map((movie) => {
            const { release_date, backdrop_path, genres, title, vote_average } = movie;
            const genreSliced = genres.slice(0, 2);
            const genreName = genreSliced.map(genre => genre.name).join(", ");
            console.log(genreName);

            return `<div class="library-container">
                <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
                <div class="rating-libr rating-library">
                        <div class="rating-body">
                            <div class="rating-active" style="width: ${convertRatingToPercentage(vote_average)}%;"></div>
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
                        <h3 class="library-movie-title">${title}</h3>     
                        <span class="library-genre-title">${genreName}</span><span class="library-genre-title"> | ${release_date.slice(0, 4)}</span>   
                    </div> 
            </div>
            </div>
        </div>`;
        }).join('');

    // return `<div class="library-container">
    //         <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
    //            <div class="rating-libr rating-library">
    //                 <div class="rating-body">
    //                     <div class="rating-active" style="width: ${convertRatingToPercentage(vote_average)}%;"></div>
    //                     <div class="rating-items">
    //                         <input type="radio" class="reting-item" value="1" name="rating"></>
    //                         <input type="radio" class="reting-item" value="2" name="rating"></>
    //                         <input type="radio" class="reting-item" value="3" name="rating"></>
    //                         <input type="radio" class="reting-item" value="4" name="rating"></>
    //                         <input type="radio" class="reting-item" value="5" name="rating"></>
    //                     </div>
    //                     </div>
    //                 </div>
    //             <div class="library-container-about">
    //                 <h3 class="library-movie-title">${title}</h3>     
    //                 <span class="library-genre-title">${genreName}</span><span class="library-genre-title"> | ${release_date.slice(0, 4)}</span>   
    //             </div> 
    //       </div>
    //      </div>
    // </div>`;
};

initLibraryFetch();

function convertRatingToPercentage(rating) {
  // Перетворюємо рейтинг у відсотки
  const percentage = (rating / 10) * 100;

  // Округлюємо значення до двох знаків після коми
  const roundedPercentage = Math.round(percentage * 100) / 100;

  return roundedPercentage;
}

