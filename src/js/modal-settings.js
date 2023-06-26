//import { api } from './apikey';

export function renderModalFilmMarkup(data) {
  return `
    <div class="modal-window">
      <div class="modal-header">
        <h2 class="modal-title">${data.title}</h2>
      </div>
      <div class="modal-body">
        <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}" class="modal-poster" />
        <div class="modal-details">
          <p class="modal-release-date"><span class="modal-label">Release Date:</span> ${data.release_date}</p>
          <p class="modal-overview"><span class="modal-label">Overview:</span> ${data.overview}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button class="button btn-border-dark add-film-btn" data-id="${data.id}">Add to my library</button>
      </div>
    </div>
  `;
}

export function setupModalEventListeners() {
  const modal = document.querySelector('.modal-window');

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('add-film-btn')) {
      const movieId = e.target.dataset.id;
      api(movieId)
        .then(data => {
          const localStorageData =
            JSON.parse(localStorage.getItem('films')) || [];
          localStorageData.push(data);
          localStorage.setItem('films', JSON.stringify(localStorageData));
        })
        .catch(error => {
          console.log(error);
        });
    }
  });
}
