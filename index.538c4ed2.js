var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){s[e]=n},e.parcelRequired7c6=t);var o=t("3iMKl");o=t("3iMKl");const i=document.querySelector(".upcom-js-list");!async function(){try{let e={};const n=await(0,o.upcomingMovieRequest)();(await(0,o.upcomingMovieGenreRequest)()).forEach((n=>{e[n.id]=n.name})),i.insertAdjacentHTML("beforeend",function(e,n){const{release_date:s,vote_average:t,vote_count:o,backdrop_path:i,genre_ids:l,overview:a,title:p,popularity:c}=e,u=l.map((e=>n[e]));return`<div class="upcoming-container">\n        <img src="https://image.tmdb.org/t/p/original${i}" alt="${p}" class="upcom-img" /> \n        <div class="upcoming-container-about">\n            <h3 class="upcom-movie-title">${p}</h3>\n                <ul class="upcoming-list">\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle">Release date</p>\n                        <p class="upcom-release-date">${s}</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle">Vote / Votes</p>\n                        <p class="upcom-vote"><span class="vote-span">${t}</span> <span class="slash">&nbsp/&nbsp</span> <span class="vote-span">${o}</span></p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle">Popularity</p>\n                        <p class="upcom-popularity">${c}</p>\n                    </li>\n                    <li class="upcoming-list-item">\n                        <p class="upcom-movie-subtitle">Genre</p>\n                        <p class="upcom-genre">${u}</p>\n                    </li>\n                </ul>\n                <p class="upcom-movie-about-title">ABOUT</p>\n                <p class="upcom-movie-about">${a}</p>\n                <button type="button" class="upcom-btn">Add to my library</button>\n            </div>\n      </div>`}(n.results[0],e))}catch(e){console.log(e)}}();
//# sourceMappingURL=index.538c4ed2.js.map
