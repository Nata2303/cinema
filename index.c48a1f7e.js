!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=i);var r=i("bpxeT"),l=i("2TvXO"),c=i("dIxxU"),s=new Date,o=[],d=[],u=[],g="",v="",p="",m=window.innerWidth;function f(){return(f=e(r)(e(l).mark((function n(){var t,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/trending/movie/week?language=en-US",t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},e.next=5,c.default.get("".concat("https://api.themoviedb.org/3/trending/movie/week?language=en-US"),t);case 5:if(200===(a=e.sent).status){e.next=8;break}throw new Error(a.status);case 8:return i=a.data,e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var y=document.querySelector(".weekly-trends-card-list");document.querySelector(".rating-active");(function(){return f.apply(this,arguments)})().then((function(e){var n=e.results[8],t=(n.id,n.title),a=n.poster_path,i=n.release_date,r=n.vote_average,l=n.genre_ids;document.querySelector(".rating-active");ratingInPercent=I(r),b().then((function(e){var n=document.querySelector(".genre"),t=!0,a=!1,i=void 0;try{for(var r,c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var s=r.value;l.includes(s.id)&&o.push(s.name)}}catch(e){a=!0,i=e}finally{try{t||null==c.return||c.return()}finally{if(a)throw i}}g=o.join(", "),n.textContent="".concat(g)})).catch((function(e){return console.log(e)}));var c='<li class="card-film"><div class="card-container">\n  <img src = "https://image.tmdb.org/t/p/w500'.concat(a,'" alt = "').concat(t,'" class="weekly-trends-film-img">\n  <div class="film-info-poster">\n  <h3 class="weekly-trends-film-title">').concat(t,'</h3><div class="weekly-trends-info">\n  <span class="genre">').concat(g,"</span>\n  <span>|</span>\n  <span>").concat(s.getFullYear(i),'</span></div></div>\n  <div class="rating weekly-trends-film-rating"><div class="rating-body">\n  <div class="rating-active" style="width: ').concat(ratingInPercent,'%;"></div>\n  <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating">\n        <input type="radio" class="reting-item" value="2" name="rating">\n        <input type="radio" class="reting-item" value="3" name="rating">\n        <input type="radio" class="reting-item" value="4" name="rating">\n        <input type="radio" class="reting-item" value="5" name="rating">\n    </div>\n</div>\n</div>\n</div>\n</li>');if(y.insertAdjacentHTML("beforeend",c),m>=768){var f=e.results[12],h=(f.id,f.title),w=f.poster_path,x=f.release_date,j=f.vote_average,J=f.genre_ids;document.querySelector(".rating-active");ratingInPercent=I(j),b().then((function(e){var n=document.querySelector(".genre2"),t=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;J.includes(c.id)&&d.push(c.name)}}catch(e){a=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}v=d.join(", "),n.textContent="".concat(v)})).catch((function(e){return console.log(e)}));var M='<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500'.concat(w,'" alt = "').concat(h,'" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">').concat(h,'</h3><div class="weekly-trends-info">\n      <span class="genre2">').concat(v,"</span>\n      <span>|</span>\n      <span>").concat(s.getFullYear(x),'</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ').concat(ratingInPercent,'%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>');y.insertAdjacentHTML("beforeend",M);var O=e.results[2],k=(O.id,O.title),S=O.poster_path,Y=O.release_date,_=O.vote_average,q=O.genre_ids;document.querySelector(".rating-active"),ratingInPercent=I(_),b().then((function(e){var n=document.querySelector(".genre3"),t=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;q.includes(c.id)&&u.push(c.name)}}catch(e){a=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}p=u.join(", "),n.textContent="".concat(p)})).catch((function(e){return console.log(e)}));var V='<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500'.concat(S,'" alt = "').concat(k,'" class="weekly-trends-film-img">\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">').concat(k,'</h3><div class="weekly-trends-info">\n      <span class="genre3">').concat(p,"</span>\n      <span>|</span>\n      <span>").concat(s.getFullYear(Y),'</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ').concat(ratingInPercent,'%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>');y.insertAdjacentHTML("beforeend",V)}}));var h=document.querySelectorAll(".rating");function w(e){!function(e){ratingActive=e.querySelector(".rating-active"),ratingValue=e.querySelector(".rating-value")}(e),function(){arguments.length>0&&void 0!==arguments[0]||ratingValue.innerHTML;var e=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width="".concat(e,"%")}()}function I(e){var n=e/10*100;return Math.round(100*n)/100}function b(){return x.apply(this,arguments)}function x(){return(x=e(r)(e(l).mark((function n(){var t,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/genre/movie/list?language=en",t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},e.next=5,c.default.get("".concat("https://api.themoviedb.org/3/genre/movie/list?language=en"),t);case 5:return a=e.sent,i=a.data.genres,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}h.length>0&&function(){for(var e=0;e<h.length;e++){w(h[e])}}()}();
//# sourceMappingURL=index.c48a1f7e.js.map