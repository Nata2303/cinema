!function(){var e={sectionHero:document.querySelector(".hero-main"),basicHero:document.querySelector(".basic-hero")};fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}}).then((function(e){if(!e.ok)throw new Error("Failed to fetch breeds");return e.json()})).catch((function(e){throw new Error("Failed to fetch breeds")})).then((function(e){return console.log(e.results[0]),e.results[1]})).then((function(t){return function(t){e.sectionHero.style.background="linear-gradient(86.77deg, #111111 10.38%, rgba(249, 245, 245, 0) 65.61%), url(https://image.tmdb.org/t/p/original/".concat(t.backdrop_path,")"),e.sectionHero.style.backgroundSize="auto 100%",e.sectionHero.style.backgroundRepeat="no-repeat",e.sectionHero.style.backgroundPosition="center";var n,i,r=(n=t.overview,i=100,n.length>i?n.substring(0,i)+"...":n),a='<div class="film-box-hero"><h2 class="hero-title-film">'.concat(t.title,'</h2><div class="rating">\n<div class="rating-body">\n    <div class="rating-active"></div>\n    <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating"></>\n        <input type="radio" class="reting-item" value="2" name="rating"></>\n        <input type="radio" class="reting-item" value="3" name="rating"></>\n        <input type="radio" class="reting-item" value="4" name="rating"></>\n        <input type="radio" class="reting-item" value="5" name="rating"></>\n    </div>\n</div>\n\n</div><p class="hero-text-film">').concat(r,'</p><button class="hero-btn-static ">Watch trailer</button><button class="hero-btn-static-sec">More details</button></div>');return e.basicHero.innerHTML=a,console.log(e.sectionHero.style.background),a}(t)})).then((function(e){return console.log(e)}));var t=document.querySelectorAll(".rating");function n(e){!function(e){ratingActive=e.querySelector(".rating-active"),ratingValue=e.querySelector(".rating-value")}(e),function(){arguments.length>0&&void 0!==arguments[0]||ratingValue.innerHTML;var e=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width="".concat(e,"%")}()}t.length>0&&function(){for(var e=0;e<t.length;e++){n(t[e])}}()}();
//# sourceMappingURL=index.57029646.js.map
