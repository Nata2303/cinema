var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var a=i("2shzp");const r=new Date;let s=[],l=[],c=[],o="",d="",g="";const m=window.innerWidth;const u=document.querySelector(".weekly-trends-card-list");document.querySelector(".rating-active");(async function(){try{const e="https://api.themoviedb.org/3/trending/movie/week?language=en-US",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},t=await a.default.get(`${e}`,n);if(200!==t.status)throw new Error(t.status);return t.data}catch(e){console.log(e)}})().then((e=>{const n=e.results[8],{id:t,title:i,poster_path:a,release_date:p,vote_average:v,genre_ids:h}=n;document.querySelector(".rating-active");ratingInPercent=y(v),f().then((e=>{const n=document.querySelector(".genre");for(const n of e)h.includes(n.id)&&s.push(n.name);o=s.join(", "),n.textContent=`${o}`})).catch((e=>console.log(e)));const w=`<li class="card-film"><div class="card-container">\n  <img src = "https://image.tmdb.org/t/p/w500${a}" alt = "${i}" class="weekly-trends-film-img">\n  <div class="film-info-poster">\n  <h3 class="weekly-trends-film-title">${i}</h3><div class="weekly-trends-info">\n  <span class="genre">${o}</span>\n  <span>|</span>\n  <span>${r.getFullYear(p)}</span></div></div>\n  <div class="rating weekly-trends-film-rating"><div class="rating-body">\n  <div class="rating-active" style="width: ${ratingInPercent}%;"></div>\n  <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating">\n        <input type="radio" class="reting-item" value="2" name="rating">\n        <input type="radio" class="reting-item" value="3" name="rating">\n        <input type="radio" class="reting-item" value="4" name="rating">\n        <input type="radio" class="reting-item" value="5" name="rating">\n    </div>\n</div>\n</div>\n</div>\n</li>`;if(u.insertAdjacentHTML("beforeend",w),m>=768){const n=e.results[12],t=(n.id,n.title),i=n.poster_path,a=n.release_date,s=n.vote_average,o=n.genre_ids;let m=document.querySelector(".rating-active");ratingInPercent=y(s),f().then((e=>{const n=document.querySelector(".genre2");for(const n of e)o.includes(n.id)&&l.push(n.name);d=l.join(", "),n.textContent=`${d}`})).catch((e=>console.log(e)));const p=`<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500${i}" alt = "${t}" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">${t}</h3><div class="weekly-trends-info">\n      <span class="genre2">${d}</span>\n      <span>|</span>\n      <span>${r.getFullYear(a)}</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ${ratingInPercent}%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>`;u.insertAdjacentHTML("beforeend",p);const v=e.results[2],h=(v.id,v.title),w=v.poster_path,I=v.release_date,$=v.vote_average,j=v.genre_ids;m=document.querySelector(".rating-active"),ratingInPercent=y($),f().then((e=>{const n=document.querySelector(".genre3");for(const n of e)j.includes(n.id)&&c.push(n.name);g=c.join(", "),n.textContent=`${g}`})).catch((e=>console.log(e)));const J=`<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500${w}" alt = "${h}" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">${h}</h3><div class="weekly-trends-info">\n      <span class="genre3">${g}</span>\n      <span>|</span>\n      <span>${r.getFullYear(I)}</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ${ratingInPercent}%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>`;u.insertAdjacentHTML("beforeend",J)}}));const p=document.querySelectorAll(".rating");function v(e){!function(e){ratingActive=e.querySelector(".rating-active"),ratingValue=e.querySelector(".rating-value")}(e),function(e=ratingValue.innerHTML){const n=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width=`${n}%`}()}function y(e){const n=e/10*100;return Math.round(100*n)/100}async function f(){try{const e="https://api.themoviedb.org/3/genre/movie/list?language=en",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},t=await a.default.get(`${e}`,n);return t.data.genres}catch(e){console.log(e)}}p.length>0&&function(){for(let e=0;e<p.length;e++){v(p[e])}}();
//# sourceMappingURL=index.a23a18c7.js.map