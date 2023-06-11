
refs = {
  modalTrailer: document.querySelector('.modal-content')
}




function fetchBreeds() {
  const url =
    'https://api.themoviedb.org/3/movie/1010581/videos?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0',
    },
  };

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error('Failed to fetch breeds');
    });
}




fetchBreeds().then(r => {return r.results[0]}).then(r => videoMaker(r))

function videoMaker (video) {

//==========
const openModalBtn = document.querySelector('.hero-btn-static');
  const modal = document.getElementById('modal');
  const closeModalBtn = modal.querySelector('.close');
  
  // Функція для відкриття модального вікна
  function openModal() {
    modal.style.display = 'block';
  }
  
  // Функція для закриття модального вікна
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Додаємо обробники подій
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  const refs = {
    modalTrailer:document.querySelector('.modal-content')
    
  }
//==========

const videoKey = video.key;
console.log(videoKey)

const videoIframe = document.createElement('iframe');
  videoIframe.src = `https://www.youtube.com/embed/${videoKey}`;
  videoIframe.allowFullscreen = true;
  videoIframe.classList.add('you-tube-iframe')
  
  
  
console.log(videoIframe)
refs.modalTrailer.innerHTML = '';

refs.modalTrailer.appendChild(videoIframe);

}

// setTimeout(() => {
//   const openModalBtn = document.querySelector('.hero-btn-static');
//   const modal = document.getElementById('modal');
//   const closeModalBtn = modal.querySelector('.close');
  
//   // Функція для відкриття модального вікна
//   function openModal() {
//     modal.style.display = 'block';
//   }
  
//   // Функція для закриття модального вікна
//   function closeModal() {
//     modal.style.display = 'none';
//   }
  
//   // Додаємо обробники подій
//   openModalBtn.addEventListener('click', openModal);
//   closeModalBtn.addEventListener('click', closeModal);
//   window.addEventListener('click', function (event) {
//     if (event.target === modal) {
//       closeModal();
//     }
//   });
  
//   const refs = {
//     modalTrailer:document.querySelector('.modal-content')
    
//   }
// }, 500)