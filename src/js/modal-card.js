
function searchPoster(data) {
    if (data.poster_path) {
      return {
        posterURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        imageClass: 'poster-img'
      };
    } else {
      return {
        posterURL: './img/trailer-modal-desk@2x.png',
        imageClass: 'picture-class'
      };
    }
  }
  
  /*---------------------Створює розмітку модалки з інформацією---------------------*/

  export function renderModalFilmMarkup(data) {
    const genreList = data.genres.map(genre => genre.name).slice(0, 2).join(', ');
    const vote = data.vote_average.toFixed(1);
    const popularity = data.popularity.toFixed(1);
    const voteCount = data.vote_count.toFixed(0);
    const { posterURL, imageClass } = searchPoster(data);
    
    return `
    <div class="modal-window">
      <button class="modal-close-btn">
         <svg class="modal-close-icon" width="100%" height="100%" >
            <use href="./images/sprite.svg#close" width="100%" height="100%"></use>
         </svg>
     </button>
     <div class="poster-wrapper">
     <img class="${imageClass}"   src="${posterURL}" alt="Movie poster">
     </div>
     <div class="about-film-wrapper">
      <h2 class="film-tittle">${data.original_title}</h2>
      <div class="film-wrapper">
        <ul class="first-film-list">
          <li class="about-film-item"> Vote / Votes</li>
          <li class="about-film-item">Popularity</li>
          <li class="about-film-item">Genre</li>
        </ul >
        <ul class="second-film-list ">
         <li class="about-film-item "> <span class ="vote">${vote}</span> / <span class ="vote">${voteCount}</span></li>
         <li class="about-film-item">${popularity}</li>
         <li class="about-film-item">${genreList}</li>
        </ul>
      </div>
     <p class=" about-tittle">About </p>
     <p class="about-film-story ">${data.overview} </p>
     <button class=" button btn-border-dark add-film-btn">Add to my library</button>
     </div>
    </div>`;
  }