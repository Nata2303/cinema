!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,o){n[e]=o},o.parcelRequired7c6=s);var c=s("bpxeT"),i=s("2TvXO"),l=s("hDMWd"),a=(l=s("hDMWd"),document.querySelector(".upcom-js-list"));function r(){return(r=e(c)(e(i).mark((function o(){var t,n,s,c;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.next=4,(0,l.upcomingMovieRequest)();case 4:return n=e.sent,e.next=7,(0,l.upcomingMovieGenreRequest)();case 7:e.sent.forEach((function(e){t[e.id]=e.name})),s=Math.floor(Math.random()*n.results.length),c=n.results[s],console.log(c),a.insertAdjacentHTML("beforeend",p(c,t)),u(c.id),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),o,null,[[0,16]])})))).apply(this,arguments)}function p(e,o){var t=e.release_date,n=e.vote_average,s=e.vote_count,c=e.backdrop_path,i=e.genre_ids,l=e.overview,a=e.title,r=e.popularity,p=i.slice(0,2).map((function(e){return o[e]})).join(", ");return'<div class="upcoming-container">\n        <img src="https://image.tmdb.org/t/p/original'.concat(c,'" alt="').concat(a,'" class="upcom-img" /> \n        <div class="upcoming-container-about">\n            <h3 class="upcom-movie-title color">').concat(a,'</h3>\n                <ul class="upcoming-list">\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Release date</p>\n                        <p class="upcom-release-date ">').concat(t,'</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Vote / Votes</p>\n                        <p class="upcom-vote"><span class="vote-span">').concat(n,'</span> <span class="slash">&nbsp/&nbsp</span> <span class="vote-span">').concat(s,'</span></p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Popularity</p>\n                        <p class="upcom-popularity popular color">').concat(r.toFixed(1),'</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Genre</p>\n                        <p class="upcom-genre color">').concat(p,'</p>\n                    </li>\n                </ul>\n                <p class="upcom-movie-about-title color">ABOUT</p>\n                <p class="color upcom-movie-about">').concat(l,'</p>\n                <button type="button" class="upcom-btn isActive">Add to my library</button>\n            </div>\n      </div>')}function u(e){var o=document.querySelector(".upcom-btn");o.addEventListener("click",(function(){if(o.classList.contains("isActive")){o.classList.remove("isActive"),o.textContent="Remove from my library";var t=JSON.parse(localStorage.getItem("movieIds"))||[];t.includes(e)||(t.push(e),localStorage.setItem("movieIds",JSON.stringify(t))),console.log("Movie ID added to localStorage:",e)}else{o.classList.add("isActive");var n=JSON.parse(localStorage.getItem("movieIds"))||[],s=n.indexOf(e);-1!==s&&(n.splice(s,1),localStorage.setItem("movieIds",JSON.stringify(n))),o.textContent="Add to my library",console.log("Movie ID removed to localStorage:",e)}}))}!function(){r.apply(this,arguments)}()}();
//# sourceMappingURL=index.1b4c804b.js.map