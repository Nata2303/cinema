var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in t){var s=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,s.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){t[e]=o},e.parcelRequired7c6=s);var l=s("3iMKl");l=s("3iMKl");const n=document.querySelector(".upcom-js-list");!async function(){try{let e={};const o=await(0,l.upcomingMovieRequest)();(await(0,l.upcomingMovieGenreRequest)()).forEach((o=>{e[o.id]=o.name}));const t=Math.floor(Math.random()*o.results.length),s=o.results[t];console.log(s),n.insertAdjacentHTML("beforeend",function(e,o){const{release_date:t,vote_average:s,vote_count:l,backdrop_path:n,genre_ids:i,overview:c,title:a,popularity:r}=e,p=i.slice(0,2).map((e=>o[e])).join(", ");return`<div class="upcoming-container">\n        <img src="https://image.tmdb.org/t/p/original${n}" alt="${a}" class="upcom-img" /> \n        <div class="upcoming-container-about">\n            <h3 class="upcom-movie-title color">${a}</h3>\n                <ul class="upcoming-list">\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Release date</p>\n                        <p class="upcom-release-date ">${t}</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Vote / Votes</p>\n                        <p class="upcom-vote"><span class="vote-span">${s}</span> <span class="slash">&nbsp/&nbsp</span> <span class="vote-span">${l}</span></p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Popularity</p>\n                        <p class="upcom-popularity popular color">${r.toFixed(1)}</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle color">Genre</p>\n                        <p class="upcom-genre color">${p}</p>\n                    </li>\n                </ul>\n                <p class="upcom-movie-about-title color">ABOUT</p>\n                <p class="color upcom-movie-about">${c}</p>\n                <button type="button" class="upcom-btn isActive">Add to my library</button>\n            </div>\n      </div>`}(s,e)),function(e){const o=document.querySelector(".upcom-btn");o.addEventListener("click",(()=>{if(o.classList.contains("isActive")){o.classList.remove("isActive"),o.textContent="Remove from my library";const t=JSON.parse(localStorage.getItem("movieIds"))||[];t.includes(e)||(t.push(e),localStorage.setItem("movieIds",JSON.stringify(t))),console.log("Movie ID added to localStorage:",e)}else{o.classList.add("isActive");const t=JSON.parse(localStorage.getItem("movieIds"))||[],s=t.indexOf(e);-1!==s&&(t.splice(s,1),localStorage.setItem("movieIds",JSON.stringify(t))),o.textContent="Add to my library",console.log("Movie ID removed to localStorage:",e)}}))}(s.id)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.17e71774.js.map
