var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,i.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired7c6=i);var a=i("2shzp");const s=new Date;let r=[],l=[],c=[],o="",d="",g="";const m=window.innerWidth;const u=document.querySelector(".weekly-trends-card-list");document.querySelector(".rating-active");(async function(){try{const e="https://api.themoviedb.org/3/trending/movie/week?language=en-US",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},t=await a.default.get(`${e}`,n);if(200!==t.status)throw new Error(t.status);return t.data}catch(e){console.log(e)}})().then((e=>{const n=e.results[8],{id:t,title:i,poster_path:a,release_date:p,vote_average:v,genre_ids:h}=n,w=f(v);y().then((e=>{const n=document.querySelector(".genre");for(const n of e)h.includes(n.id)&&r.push(n.name);o=r.join(", "),n.textContent=`${o}`})).catch((e=>console.log(e)));const $=`<li class="card-film"><div class="card-container">\n  <img src = "https://image.tmdb.org/t/p/w500${a}" alt = "${i}" class="weekly-trends-film-img">\n  <div class="film-info-poster">\n  <h3 class="weekly-trends-film-title">${i}</h3><div class="weekly-trends-info">\n  <span class="genre">${o}</span>\n  <span>|</span>\n  <span>${s.getFullYear(p)}</span></div></div>\n  <div class="rating weekly-trends-film-rating"><div class="rating-body">\n  <div class="rating-active" style="width: ${w}%;"></div>\n  <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating">\n        <input type="radio" class="reting-item" value="2" name="rating">\n        <input type="radio" class="reting-item" value="3" name="rating">\n        <input type="radio" class="reting-item" value="4" name="rating">\n        <input type="radio" class="reting-item" value="5" name="rating">\n    </div>\n</div>\n</div>\n</div>\n</li>`;if(u.insertAdjacentHTML("beforeend",$),m>=768){const n=e.results[12],t=(n.id,n.title),i=n.poster_path,a=n.release_date,r=n.vote_average,o=n.genre_ids,m=f(r);y().then((e=>{const n=document.querySelector(".genre2");for(const n of e)o.includes(n.id)&&l.push(n.name);d=l.join(", "),n.textContent=`${d}`})).catch((e=>console.log(e)));const p=`<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500${i}" alt = "${t}" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">${t}</h3><div class="weekly-trends-info">\n      <span class="genre2">${d}</span>\n      <span>|</span>\n      <span>${s.getFullYear(a)}</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ${m}%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>`;u.insertAdjacentHTML("beforeend",p);const v=e.results[2],h=(v.id,v.title),w=v.poster_path,$=v.release_date,j=v.vote_average,I=v.genre_ids,J=f(j);y().then((e=>{const n=document.querySelector(".genre3");for(const n of e)I.includes(n.id)&&c.push(n.name);g=c.join(", "),n.textContent=`${g}`})).catch((e=>console.log(e)));const M=`<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500${w}" alt = "${h}" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">${h}</h3><div class="weekly-trends-info">\n      <span class="genre3">${g}</span>\n      <span>|</span>\n      <span>${s.getFullYear($)}</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ${J}%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>`;u.insertAdjacentHTML("beforeend",M)}}));const p=document.querySelectorAll(".rating");function v(e){!function(e){ratingActive=e.querySelector(".rating-active"),ratingValue=e.querySelector(".rating-value")}(e),function(e=ratingValue.innerHTML){const n=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width=`${n}%`}()}function f(e){const n=e/10*100;return Math.round(100*n)/100}async function y(){try{const e="https://api.themoviedb.org/3/genre/movie/list?language=en",n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},t=await a.default.get(`${e}`,n);return t.data.genres}catch(e){console.log(e)}}p.length>0&&function(){for(let e=0;e<p.length;e++){v(p[e])}}();
//# sourceMappingURL=index.b812bec7.js.map
