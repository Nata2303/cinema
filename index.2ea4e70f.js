!function(){var t={sectionHero:document.querySelector(".hero-main"),basicHero:document.querySelector(".basic-hero"),rating:document.querySelector(".rating-active")};fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}}).then((function(t){if(!t.ok)throw new Error("Failed to fetch breeds");return t.json()})).catch((function(t){throw new Error("Failed to fetch breeds")})).then((function(t){return t.results[2]})).then((function(e){return function(e){function n(){window.innerWidth>=768?(t.sectionHero.style.background="linear-gradient(86.77deg, #111111 35.38%, rgba(249, 245, 245, 0) 65.61%), url(https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")"),t.sectionHero.style.backgroundSize="auto 100%",t.sectionHero.style.backgroundRepeat="no-repeat",t.sectionHero.style.backgroundPosition="right"):(t.sectionHero.style.background="linear-gradient(86.77deg, #111111 10.38%, rgba(249, 245, 245, 0) 65.61%), url(https://image.tmdb.org/t/p/original/".concat(e.backdrop_path,")"),t.sectionHero.style.backgroundSize="auto 100%",t.sectionHero.style.backgroundRepeat="no-repeat",t.sectionHero.style.backgroundPosition="center")}n();var i,r,a=(i=e.vote_average,r=i/10*100,Math.round(100*r)/100),o=e.id;localStorage.removeItem("filmIdstor"),localStorage.setItem("filmIdstor","".concat(o));var c,l=(c=e.overview,window.innerWidth>=768?c.length>200?c.substring(0,200)+"...":c:c.length>100?c.substring(0,100)+"...":c),s='<div class="film-box-hero"><h2 class="hero-title-film">'.concat(e.title,'</h2><div class="rating">\n<div class="rating-body">\n    <div class="rating-active" style="width: ').concat(a,'%;" ></div>\n    <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating"></>\n        <input type="radio" class="reting-item" value="2" name="rating"></>\n        <input type="radio" class="reting-item" value="3" name="rating"></>\n        <input type="radio" class="reting-item" value="4" name="rating"></>\n        <input type="radio" class="reting-item" value="5" name="rating"></>\n    </div>\n</div>\n\n</div><p class="hero-text-film">').concat(l,'</p><button  class="hero-btn-static ">Watch trailer</button><button class="hero-btn-static-sec">More details</button></div>');return t.basicHero.innerHTML=s,s}(e)}));var e=document.querySelectorAll(".rating");function n(t){!function(t){ratingActive=t.querySelector(".rating-active"),ratingValue=t.querySelector(".rating-value")}(t),function(){arguments.length>0&&void 0!==arguments[0]||ratingValue.innerHTML;var t=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width="".concat(t,"%")}()}e.length>0&&function(){for(var t=0;t<e.length;t++){n(e[t])}}()}();
//# sourceMappingURL=index.2ea4e70f.js.map
