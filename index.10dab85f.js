!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=i);var r=i("bpxeT"),l=i("2TvXO"),s=i("dIxxU"),c=new Date,o=[],d=[],u=[],v="",g="",p="",m=window.innerWidth;function f(){return(f=e(r)(e(l).mark((function n(){var t,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/trending/movie/week?language=en-US",t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},e.next=5,s.default.get("".concat("https://api.themoviedb.org/3/trending/movie/week?language=en-US"),t);case 5:if(200===(a=e.sent).status){e.next=8;break}throw new Error(a.status);case 8:return i=a.data,e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}var y=document.querySelector(".weekly-trends-card-list");document.querySelector(".rating-active");(function(){return f.apply(this,arguments)})().then((function(e){var n=e.results[0],t=(n.id,n.title),a=n.poster_path,i=n.release_date,r=n.vote_average,l=n.genre_ids,s=b(r);x().then((function(e){var n=document.querySelector(".genre"),t=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var c=r.value;l.includes(c.id)&&o.push(c.name)}}catch(e){a=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(a)throw i}}v=o.join(", "),n.textContent="".concat(v)})).catch((function(e){return console.log(e)}));var f='<li class="card-film"><div class="card-container">\n  <img src = "https://image.tmdb.org/t/p/w500'.concat(a,'" alt = "').concat(t,'" class="weekly-trends-film-img">\n  <div class="wt-gradient"></div>\n  <div class="film-info-poster">\n  <h3 class="weekly-trends-film-title">').concat(t,'</h3><div class="weekly-trends-info">\n  <span class="genre">').concat(v,"</span>\n  <span>|</span>\n  <span>").concat(c.getFullYear(i),'</span></div></div>\n  <div class="rating weekly-trends-film-rating"><div class="rating-body">\n  <div class="rating-active" style="width: ').concat(s,'%;"></div>\n  <div class="rating-items">\n        <input type="radio" class="reting-item" value="1" name="rating">\n        <input type="radio" class="reting-item" value="2" name="rating">\n        <input type="radio" class="reting-item" value="3" name="rating">\n        <input type="radio" class="reting-item" value="4" name="rating">\n        <input type="radio" class="reting-item" value="5" name="rating">\n    </div>\n</div>\n</div>\n</div>\n</li>');if(y.insertAdjacentHTML("beforeend",f),m>=768){var h=e.results[2],w=(h.id,h.title),I=h.poster_path,j=h.release_date,J=h.vote_average,M=h.genre_ids,O=b(J);x().then((function(e){var n=document.querySelector(".genre2"),t=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var s=r.value;M.includes(s.id)&&d.push(s.name)}}catch(e){a=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}g=d.join(", "),n.textContent="".concat(g)})).catch((function(e){return console.log(e)}));var k='<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500'.concat(I,'" alt = "').concat(w,'" class="weekly-trends-film-img">\n      <div class="wt-gradient"></div>\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">').concat(w,'</h3><div class="weekly-trends-info">\n      <span class="genre2">').concat(g,"</span>\n      <span>|</span>\n      <span>").concat(c.getFullYear(j),'</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ').concat(O,'%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>');y.insertAdjacentHTML("beforeend",k);var Y=e.results[6],S=(Y.id,Y.title),_=Y.poster_path,V=Y.release_date,C=Y.vote_average,G=Y.genre_ids,N=b(C);x().then((function(e){var n=document.querySelector(".genre3"),t=!0,a=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var s=r.value;G.includes(s.id)&&u.push(s.name)}}catch(e){a=!0,i=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}p=u.join(", "),n.textContent="".concat(p)})).catch((function(e){return console.log(e)}));var T='<li class="card-film"><div class="card-container">\n      <img src = "https://image.tmdb.org/t/p/w500'.concat(_,'" alt = "').concat(S,'" class="weekly-trends-film-img">\n      <div class="wt-gradient"></div>\n      <div class="film-info-poster">\n      <h3 class="weekly-trends-film-title">').concat(S,'</h3><div class="weekly-trends-info">\n      <span class="genre3">').concat(p,"</span>\n      <span>|</span>\n      <span>").concat(c.getFullYear(V),'</span></div></div>\n      <div class="rating weekly-trends-film-rating"><div class="rating-body">\n      <div class="rating-active" style="width: ').concat(N,'%;"></div>\n      <div class="rating-items">\n            <input type="radio" class="reting-item" value="1" name="rating"></>\n            <input type="radio" class="reting-item" value="2" name="rating"></>\n            <input type="radio" class="reting-item" value="3" name="rating"></>\n            <input type="radio" class="reting-item" value="4" name="rating"></>\n            <input type="radio" class="reting-item" value="5" name="rating"></>\n        </div>\n    </div>\n    </div>\n    </div>\n    </li>');y.insertAdjacentHTML("beforeend",T)}}));var h=document.querySelectorAll(".rating");function w(e){!function(e){ratingActive=e.querySelector(".rating-active"),ratingValue=e.querySelector(".rating-value")}(e),function(){arguments.length>0&&void 0!==arguments[0]||ratingValue.innerHTML;var e=parseFloat(ratingValue.innerHTML)/.05;ratingActive.style.width="".concat(e,"%")}()}function b(e){var n=e/10*100;return Math.round(100*n)/100}function x(){return I.apply(this,arguments)}function I(){return(I=e(r)(e(l).mark((function n(){var t,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.themoviedb.org/3/genre/movie/list?language=en",t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGFlZjVlODMzOTZmYmViNmY2MmU4NmNmZmViYjk4MSIsInN1YiI6IjY0ODIzMjcxZDJiMjA5MDBlYmJmM2Y5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VO3Y1F5-wzOGPgGegX0KKGPSKeCvq8s50R1CV3r3ln0"}},e.next=5,s.default.get("".concat("https://api.themoviedb.org/3/genre/movie/list?language=en"),t);case 5:return a=e.sent,i=a.data.genres,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}h.length>0&&function(){for(var e=0;e<h.length;e++){w(h[e])}}()}();
//# sourceMappingURL=index.10dab85f.js.map
