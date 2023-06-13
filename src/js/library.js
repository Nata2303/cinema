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
    const { release_date, backdrop_path, genres, title } = arr;
    const genreSliced = genres.slice(0, 2);
    const genreName = genreSliced.map(genre => genre.name).join(", ");
    return `<div class="library-container">
            <div class="library-container-img" style="background-image: url(https://image.tmdb.org/t/p/original${backdrop_path});">
               <div class="library-container-about">
                     <h3 class="library-movie-title">${title}</h3>     
                    <span class="library-genre-title">${genreName}</span><span class="library-genre-title"> | ${release_date.slice(0, 4)}</span>   
               </div> 
          </div>
         </div>`;
};

initLibraryFetch();

