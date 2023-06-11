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
 initRatinsVar(rating);
 setRetingActiveWidth()
}

function initRatinsVar (rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.rating-value');
}

function setRetingActiveWidth (index = ratingValue.innerHTML){
const ratingActiveWidth = parseFloat(ratingValue.innerHTML)/0.05;
ratingActive.style.width = `${ratingActiveWidth}%`
}