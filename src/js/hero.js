

function fetchBreeds() {
    const url =
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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

const refs = {
    sectionHero: document.querySelector('.hero-main'),
    basicHero: document.querySelector('.basic-hero'),
    rating: document.querySelector('.rating-active')
    
}

function heroFilm(){
   return fetchBreeds().then(r => {
    // console.log(r.results[2]) ;
     return r.results[2] }).then(r=> {return cardMaker(r); })
    //  .then(() => {setTimeout(onTimeOut,700)})
    //  then(r=> console.log(r));
}

heroFilm()

function cardMaker (film) {
    

  function setSectionHeroStyles() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth >= 768) {
      refs.sectionHero.style.background = `linear-gradient(86.77deg, #111111 35.38%, rgba(249, 245, 245, 0) 65.61%), url(https://image.tmdb.org/t/p/original/${film.backdrop_path})`;
      refs.sectionHero.style.backgroundSize = 'auto 100%';
      refs.sectionHero.style.backgroundRepeat = 'no-repeat';
      refs.sectionHero.style.backgroundPosition = 'right';
    } else {
      refs.sectionHero.style.background = `linear-gradient(86.77deg, #111111 10.38%, rgba(249, 245, 245, 0) 65.61%), url(https://image.tmdb.org/t/p/original/${film.backdrop_path})` ;
refs.sectionHero.style.backgroundSize = 'auto 100%';
refs.sectionHero.style.backgroundRepeat = 'no-repeat';
refs.sectionHero.style.backgroundPosition = 'center';
    }
  }
  setSectionHeroStyles() 
  



 const retingInPercent = convertRatingToPercentage(film.vote_average);
// console.log(retingInPercent)
let filmIdTrailer = film.id;
localStorage.removeItem('filmIdstor')
localStorage.setItem('filmIdstor', `${filmIdTrailer}`)

const filmText =  truncateText(film.overview) ;

const htmlFilmCard = `<div class="film-box-hero"><h2 class="hero-title-film">${film.title}</h2><div class="rating">
<div class="rating-body">
    <div class="rating-active" style="width: ${retingInPercent}%;" ></div>
    <div class="rating-items">
        <input type="radio" class="reting-item" value="1" name="rating"></>
        <input type="radio" class="reting-item" value="2" name="rating"></>
        <input type="radio" class="reting-item" value="3" name="rating"></>
        <input type="radio" class="reting-item" value="4" name="rating"></>
        <input type="radio" class="reting-item" value="5" name="rating"></>
    </div>
</div>

</div><p class="hero-text-film">${filmText}</p><button  class="hero-btn-static ">Watch trailer</button><button class="hero-btn-static-sec">More details</button></div>`;
refs.basicHero.innerHTML = htmlFilmCard;
// console.log(refs.sectionHero.style.background);
    return htmlFilmCard
}

function truncateText(text) {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    if (text.length > 200) {
      return text.substring(0, 200) + '...';
    }
    return text;
  }
    else if (text.length > 100) {
      return text.substring(0, 100) + '...';
    }
    return text;
  }
  
//   Зірочки 
const ratings =document.querySelectorAll('.rating');
if(ratings.length > 0) {
    initRatings()
}

function initRatings () {
    let ratingActive, ratingValue;
    for(let i = 0 ; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating)
    }
}

function initRating (rating) {
    initRatingVars(rating);
 setRetingActiveWidth()
}

function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.rating-value');
}

function setRetingActiveWidth (index = ratingValue.innerHTML){
const ratingActiveWidth = parseFloat(ratingValue.innerHTML)/0.05;
ratingActive.style.width = `${ratingActiveWidth}%`
}

function convertRatingToPercentage(rating) {
    // Перетворюємо рейтинг у відсотки
    const percentage = (rating / 10) * 100;
    
    // Округлюємо значення до двох знаків після коми
    const roundedPercentage = Math.round(percentage * 100) / 100;
    
    return roundedPercentage;
  }
  

//  function onTimeOut(){
//     console.log(filmIdTrailer)
    
//  }


//  =======Фільм Трейлер========










  


